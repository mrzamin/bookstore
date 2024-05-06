import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const MindsetPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Mindset Books"
      filter="mindset"
    ></PageTemplate>
  );
};

export default MindsetPage;
