import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const EntrepreneurshipPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Entrepreneurship Books"
      filter="entrepreneurship & startups"
    ></PageTemplate>
  );
};

export default EntrepreneurshipPage;
