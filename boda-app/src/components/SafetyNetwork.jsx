// export default function SafetyNetwork() {
//   return (
//     <div className="p-4 bg-green-100 rounded">
//       <h2 className="font-bold text-lg">Invite Friends to Your Safety Network</h2>
//       <input type="text" placeholder="Enter friend's phone" className="border p-2 rounded" />
//       <button className="bg-green-500 text-white p-2 rounded ml-2">Invite</button>
//     </div>
//   );
// }

export default function SafetyNetwork() {
  return (
    <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl shadow-md my-4">
      <h2 className="text-xl font-bold text-emerald-700 mb-2">Invite Friends to Your Safety Network</h2>
      <div className="flex gap-2">
        <input type="text" placeholder="Enter friend's phone" className="border-2 border-emerald-300 p-2 rounded-lg flex-1" />
        <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors">Invite</button>
      </div>
    </div>
  );
}
