import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const DailyCommunicationPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Daily Communication Books"
      filter={"daily communication"}
    ></PageTemplate>
  );
};

export default DailyCommunicationPage;
