// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   console.log('Navbar component rendered');
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between">
//       <h1 className="font-bold text-lg">Boda Safety</h1>
//       <div>
//         <Link to="/" className="px-2" onClick={() => console.log('Home link clicked')}>Home</Link>
//         <Link to="/register" className="px-2" onClick={() => console.log('Register link clicked')}>Register</Link>
//         <Link to="/dashboard" className="px-2" onClick={() => console.log('Dashboard link clicked')}>Dashboard</Link>
//         <Link to="/community" className="px-2" onClick={() => console.log('Community link clicked')}>Community</Link>
//         <Link to="/business" className="px-2" onClick={() => console.log('Business link clicked')}>Business</Link>
//       </div>
//     </nav>
//   );
// }

// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg p-4 text-white flex justify-between items-center">
//       <h1 className="font-bold text-2xl tracking-wide">🚀 BodaSafe</h1>
//       <div className="space-x-4 text-lg">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/register" className="hover:underline">Register</Link>
//         <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//         <Link to="/community" className="hover:underline">Community</Link>
//         <Link to="/business" className="hover:underline">Business</Link>
//       </div>
//     </nav>
//   );
// }

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg p-4 text-white flex justify-between items-center font-inter">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          alt="BodaSafe Logo"
          className="w-12 h-2 rounded-full border-2 border-white shadow"
        />
        <h1 className="font-bold text-2xl tracking-wide">BodaSafe</h1>
      </div>
      <div className="space-x-4 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/community" className="hover:underline">Community</Link>
        <Link to="/business" className="hover:underline">Business</Link>
      </div>
    </nav>
  );
}