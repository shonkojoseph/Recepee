import React, { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const registerUser = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();
      console.log(data);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Error registering user.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterForm;
