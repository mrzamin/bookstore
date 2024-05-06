import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const LeadershipPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Leadership Books"
      filter="leadership"
    ></PageTemplate>
  );
};

export default LeadershipPage;
