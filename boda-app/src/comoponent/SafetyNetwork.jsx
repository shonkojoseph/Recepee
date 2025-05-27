export default function SafetyNetwork() {
  return (
    <div className="p-4 bg-green-100 rounded">
      <h2 className="font-bold text-lg">Invite Friends to Your Safety Network</h2>
      <input type="text" placeholder="Enter friend's phone" className="border p-2 rounded" />
      <button className="bg-green-500 text-white p-2 rounded ml-2">Invite</button>
    </div>
  );
}
