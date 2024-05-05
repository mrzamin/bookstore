import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const PublicSpeakingPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Public Speaking Books"
      filter="public speaking"
    ></PageTemplate>
  );
};

export default PublicSpeakingPage;
