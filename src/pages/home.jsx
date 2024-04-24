import Hero from "../components/Hero/Hero";
import HeroContent from "../components/Hero/HeroContent";
import HeroTitle from "../components/Hero/HeroTitle";

import hero from "../../public/images/pastel-abstract.png";

const HomePage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={hero}>
        <HeroTitle title="The Mindset Bookstore" />
      </HeroContent>
    </Hero>
  );
};

export default HomePage;
