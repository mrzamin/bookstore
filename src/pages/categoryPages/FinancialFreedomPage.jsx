import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const FinancialFreedomPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Financial Freedom Books"
      filter="financial freedom"
    ></PageTemplate>
  );
};

export default FinancialFreedomPage;
