import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const MoneyPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Money Books"
      filter={"financial freedom" || "investing"}
    ></PageTemplate>
  );
};

export default MoneyPage;
