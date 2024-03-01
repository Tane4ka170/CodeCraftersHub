import { headers } from 'next/headers';
import StatusLabel, { Status } from './componets/status-label';
import AddCompanyButton from './componets/add-company-button';
import { ServerComponent } from './componets/server-component';
import { ClientComponent } from './componets/client-component';
import { ServerComponentCopy } from './componets/server-component copy';

export default function Home() {
  return (
    <main>
      <h1 className=" text-xl">Home {new Date().toTimeString()}</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
