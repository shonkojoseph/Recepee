// export default function EmergencyButton() {
//   const sendSOS = () => {
//     alert("🚨 Emergency alert sent! Location: https://maps.google.com/?q=1.2921,36.8219");
//   };

//   return (
//     <button
//       onClick={sendSOS}
//       className="bg-red-600 text-white p-4 rounded-lg text-xl font-bold shadow-lg"
//     >
//       🚨 Send Emergency SOS
//     </button>
//   );
// }

export default function EmergencyButton() {
  const sendSOS = () => {
    alert("🚨 Emergency alert sent! Location: https://maps.google.com/?q=1.2921,36.8219");
  };

  return (
    <button
      onClick={sendSOS}
      className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white py-4 px-6 rounded-full text-2xl font-extrabold shadow-xl transition-transform hover:scale-105"
    >
      🚨 Emergency SOS
    </button>
  );
}
