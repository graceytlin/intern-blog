import Tabs from "../../components/Tabs/Tabs";
import { teams } from "./teams-data";

const TeamsPage = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>Teams</h2>
        <div className="underline"></div>
      </div>

      <Tabs tabs={teams} />
    </section>
  );
};

export default TeamsPage;
