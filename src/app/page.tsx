import AddCompanyButton from "./components/add-company-button";
import StatusLabel, {Status} from "./components/status-label";
import { headers } from 'next/headers'; 

export default function Home() {

  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton/>
    </main>
  )
};
