import hero from "../../../public/images/pastel-abstract.png";
import PageTemplate from "../PageTemplate";

const MotivationPage = () => {
  return (
    <PageTemplate
      hero={hero}
      title="Motivation, Inspiration, & Success Books"
      filter="motivation, inspiration, & success"
    ></PageTemplate>
  );
};

export default MotivationPage;
