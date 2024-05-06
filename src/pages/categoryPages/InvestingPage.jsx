import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const InvestingPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Investing Books"
      filter="investing"
    ></PageTemplate>
  );
};

export default InvestingPage;
