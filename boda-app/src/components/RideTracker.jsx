// export default function RideTracker() {
//   return (
//     <div className="p-4 bg-blue-100 rounded">
//       <h2 className="text-lg font-bold">Live Ride Tracking</h2>
//       <p>Sharing real-time trip link...</p>
//       <a href="https://maps.google.com/?q=1.2921,36.8219" target="_blank" className="text-blue-600 underline">
//         View Rider Location
//       </a>
//     </div>
//   );
// }

export default function RideTracker() {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl shadow-md my-4">
      <h2 className="text-xl font-bold text-indigo-700 mb-2">Live Ride Tracking</h2>
      <p className="text-gray-700">Sharing real-time trip link...</p>
      <a href="https://maps.google.com/?q=1.2921,36.8219" target="_blank" className="text-blue-600 underline hover:text-blue-800">
        📍 View Rider Location
      </a>
    </div>
  );
}
