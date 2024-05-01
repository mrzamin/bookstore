import Hero from "../components/Hero/Hero";
import HeroContent from "../components/Hero/HeroContent";
import HeroTitle from "../components/Hero/HeroTitle";
import { useContext } from "react";
import { StoreContext } from "../Context.jsx";
import BookPreview from "../components/Books/BookPreview/BookPreview";
import hero from "../../public/images/pastel-abstract.png";

const PersonalGrowthPage = () => {
  const { products } = useContext(StoreContext);
  return (
    <>
      <Hero>
        <HeroContent imageSrc={hero}>
          <HeroTitle title="Personal Growth Books" />
        </HeroContent>
      </Hero>
      <BookPreview
        products={products.filter(
          (product) => product.category === "personal growth"
        )}
      ></BookPreview>
    </>
  );
};

export default PersonalGrowthPage;
