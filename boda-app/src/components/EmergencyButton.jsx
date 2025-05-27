export default function EmergencyButton() {
  const sendSOS = () => {
    alert("🚨 Emergency alert sent! Location: https://maps.google.com/?q=1.2921,36.8219");
  };

  return (
    <button
      onClick={sendSOS}
      className="bg-red-600 text-white p-4 rounded-lg text-xl font-bold shadow-lg"
    >
      🚨 Send Emergency SOS
    </button>
  );
}
