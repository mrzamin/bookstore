import Hero from "../components/Hero/Hero";
import HeroContent from "../components/Hero/HeroContent";
import HeroTitle from "../components/Hero/HeroTitle";

import hero from "../../public/images/pastel-abstract.png";

const PersonalGrowthPage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={hero}>
        <HeroTitle title="Personal Growth Books" />
      </HeroContent>
    </Hero>
  );
};

export default PersonalGrowthPage;
