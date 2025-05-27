// export default function BodaCommunity() {
//   return (
//     <div className="p-4 bg-yellow-100 rounded">
//       <h2 className="font-bold text-lg">Boda Community Hub</h2>
//       <p>View reports of unsafe zones and team up with other riders.</p>
//     </div>
//   );
// }

// export default function BodaCommunity() {
//   return (
//     <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl shadow-md my-4">
//       <h2 className="text-xl font-bold text-yellow-700 mb-2">Boda Community Hub</h2>
//       <p className="text-gray-700">View and report unsafe zones, team up with riders for safer trips.</p>
//     </div>
//   );
// }
// export default function BodaCommunity() {
//   return (
//     <div className="p-8 bg-gradient-to-tr from-yellow-50 via-orange-100 to-yellow-200 rounded-3xl shadow-xl my-8 flex flex-col md:flex-row items-center gap-8">
//       <img
//         src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
//         alt="Boda Community"
//         className="w-40 h-40 object-cover rounded-full border-4 border-yellow-300 shadow-lg"
//       />
//       <div>
//         <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-700 mb-3 tracking-tight">
//           Boda Community Hub
//         </h2>
//         <p className="text-gray-700 text-lg mb-4">
//           View and report unsafe zones, team up with riders for safer trips.
//         </p>
//         <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full shadow transition">
//           Join Community
//         </button>
//       </div>
//     </div>
//   );
// }

export default function BodaCommunity() {
  return (
    <section className="max-w-3xl mx-auto p-6 md:p-10 bg-gradient-to-tr from-yellow-50 via-orange-100 to-yellow-200 rounded-3xl shadow-2xl my-12 flex flex-col md:flex-row items-center gap-10 border border-yellow-100">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
        alt="Boda Community"
        className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-4 border-yellow-300 shadow-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-700 mb-2 tracking-tight drop-shadow">
          Boda Community Hub
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          View and report unsafe zones, team up with riders for safer trips. Connect, share, and stay safe together!
        </p>
        <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg transition duration-200 transform hover:-translate-y-1 hover:scale-105">
          Join Community
        </button>
      </div>
    </section>
  );
}