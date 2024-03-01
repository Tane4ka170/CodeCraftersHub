import AddCompanyButton from './componets/add-company-button';
import MagicButton from './componets/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className=" text-xl">Home {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
