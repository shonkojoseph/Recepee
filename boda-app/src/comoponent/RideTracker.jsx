export default function RideTracker() {
  return (
    <div className="p-4 bg-blue-100 rounded">
      <h2 className="text-lg font-bold">Live Ride Tracking</h2>
      <p>Sharing real-time trip link...</p>
      <a href="https://maps.google.com/?q=1.2921,36.8219" target="_blank" className="text-blue-600 underline">
        View Rider Location
      </a>
    </div>
  );
}
