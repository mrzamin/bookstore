import Hero from "../components/Hero/Hero";
import HeroContent from "../components/Hero/HeroContent";
import HeroTitle from "../components/Hero/HeroTitle";

import hero from "../../public/images/pastel-abstract.png";

const ShopPage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={hero}>
        <HeroTitle title="The rent page hero title" />
      </HeroContent>
    </Hero>
  );
};

export default ShopPage;
