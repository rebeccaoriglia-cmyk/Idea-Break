import ActivityCard from '../ActivityCard';

export default function ActivityCardExample() {
  return (
    <div className="p-8">
      <ActivityCard
        activity="Disegna tre cerchi perfetti senza usare strumenti. Osserva come la tua mano impara dal movimento."
        onNewActivity={() => console.log('New activity requested')}
        onShare={() => console.log('Share clicked')}
      />
    </div>
  );
}
