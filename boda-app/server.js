// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key_here';

app.use(bodyParser.json());
app.use(cors());

// Initialize database
const db = new sqlite3.Database('./bodasafe.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected to SQLite database');
});

// Create tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        contact_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(contact_id) REFERENCES users(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS rides (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        start_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        end_time DATETIME,
        start_location TEXT,
        end_location TEXT,
        status TEXT DEFAULT 'active',
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS emergencies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        location TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'pending',
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`);
});

// Middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Routes

// User Registration
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.run(
            'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, phone],
            function(err) {
                if (err) return res.status(400).json({ error: err.message });
                res.status(201).json({ id: this.lastID });
            }
        );
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// User Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    });
});

// Safety Network Endpoints
app.post('/contacts', authenticate, (req, res) => {
    const { contactPhone } = req.body;
    
    db.get('SELECT id FROM users WHERE phone = ?', [contactPhone], (err, contact) => {
        if (err || !contact) return res.status(404).json({ error: 'Contact not found' });

        db.run(
            'INSERT INTO contacts (user_id, contact_id) VALUES (?, ?)',
            [req.user.id, contact.id],
            function(err) {
                if (err) return res.status(400).json({ error: err.message });
                res.status(201).json({ id: this.lastID });
            }
        );
    });
});

app.get('/contacts', authenticate, (req, res) => {
    db.all(
        `SELECT u.id, u.name, u.phone 
        FROM contacts c
        JOIN users u ON c.contact_id = u.id
        WHERE c.user_id = ?`,
        [req.user.id],
        (err, contacts) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(contacts);
        }
    );
});

// Ride Tracking Endpoints
app.post('/rides', authenticate, (req, res) => {
    const { start_location } = req.body;
    
    db.run(
        'INSERT INTO rides (user_id, start_location) VALUES (?, ?)',
        [req.user.id, start_location],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ rideId: this.lastID });
        }
    );
});

app.put('/rides/:id', authenticate, (req, res) => {
    const { end_location } = req.body;
    
    db.run(
        'UPDATE rides SET end_location = ?, end_time = CURRENT_TIMESTAMP, status = "completed" WHERE id = ? AND user_id = ?',
        [end_location, req.params.id, req.user.id],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Ride updated successfully' });
        }
    );
});

// Emergency Endpoints
app.post('/emergencies', authenticate, (req, res) => {
    const { location } = req.body;
    
    db.run(
        'INSERT INTO emergencies (user_id, location) VALUES (?, ?)',
        [req.user.id, location],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            
            // Add notification logic here
            res.status(201).json({ emergencyId: this.lastID });
        }
    );
});

// Statistics Endpoints
app.get('/stats', authenticate, (req, res) => {
    db.get(
        `SELECT 
            (SELECT COUNT(*) FROM rides WHERE user_id = ?) as totalRides,
            (SELECT COUNT(*) FROM contacts WHERE user_id = ?) as safetyNetworkCount`,
        [req.user.id, req.user.id],
        (err, stats) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(stats);
        }
    );
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));