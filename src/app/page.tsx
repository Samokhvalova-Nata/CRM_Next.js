import ClientComponent from "./components/client-component";
import ServerComponent from "./components/server-component";
import ServerComponentCopy from "./components/server-component copy";
import StatusLabel, {Status} from "./components/status-label";
import { headers } from 'next/headers'; 

export default function Home() {

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <StatusLabel disabled={true}>Disabled</StatusLabel>
      <ServerComponent/>
      <ClientComponent>
        <ServerComponentCopy/>
      </ClientComponent>
    </main>
  )
};
