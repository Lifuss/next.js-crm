import AddCompanyButton from './components/AddCompanyButton';
import StatusLabels, { Status } from './components/StatusLabels';
import { cookies } from 'next/headers';
import MagicButton from './components/magicButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
