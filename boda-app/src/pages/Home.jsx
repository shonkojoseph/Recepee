import EmergencyButton from '../components/EmergencyButton';
import RideTracker from '../components/RideTracker';
import SafetyNetwork from '../components/SafetyNetwork';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Boda Emergency & Tracking App</h1>
      <p>Your trusted safety companion on the road.</p>
      <EmergencyButton />
      <RideTracker />
      <SafetyNetwork />
    </div>
  );
}
