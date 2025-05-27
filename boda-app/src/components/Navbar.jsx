import { Link } from 'react-router-dom';

export default function Navbar() {
  console.log('Navbar component rendered');
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-lg">Boda Safety</h1>
      <div>
        <Link to="/" className="px-2" onClick={() => console.log('Home link clicked')}>Home</Link>
        <Link to="/register" className="px-2" onClick={() => console.log('Register link clicked')}>Register</Link>
        <Link to="/dashboard" className="px-2" onClick={() => console.log('Dashboard link clicked')}>Dashboard</Link>
        <Link to="/community" className="px-2" onClick={() => console.log('Community link clicked')}>Community</Link>
        <Link to="/business" className="px-2" onClick={() => console.log('Business link clicked')}>Business</Link>
      </div>
    </nav>
  );
}