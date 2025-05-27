// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-lg">Boda Safety</h1>
      <div>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/register" className="px-2">Register</Link>
        <Link to="/dashboard" className="px-2">Dashboard</Link>
        <Link to="/community" className="px-2">Community</Link>
        <Link to="/business" className="px-2">Business</Link>
      </div>
    </nav>
  );
}
