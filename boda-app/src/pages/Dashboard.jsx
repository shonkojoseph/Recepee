import EmergencyButton from '../components/EmergencyButton';

export default function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <EmergencyButton />
      <p>View your activity and emergency logs.</p>
    </div>
  );
}
