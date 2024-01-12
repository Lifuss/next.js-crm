import StatusLabels, { Status } from './components/SatusLabels';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page</h1>
      <StatusLabels status={Status.Active}>Active</StatusLabels>
      <StatusLabels status={Status.NotActive}>Not Active</StatusLabels>
      <StatusLabels status={Status.Pending}>Pending</StatusLabels>
      <StatusLabels status={Status.Suspended}>Suspended</StatusLabels>
    </main>
  );
}
