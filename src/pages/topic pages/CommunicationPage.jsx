import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const CommunicationPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Communication Books"
      filter={"daily communication" || "public speaking"}
    ></PageTemplate>
  );
};

export default CommunicationPage;
