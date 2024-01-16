import AddCompanyButton from './components/AddCompanyButton';
import StatusLabels, { Status } from './components/StatusLabels';
import { cookies } from 'next/headers';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
