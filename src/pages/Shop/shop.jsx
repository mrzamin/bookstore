import Hero from "../../components/Hero/Hero";
import HeroContent from "../../components/Hero/HeroContent";
import HeroTitle from "../../components/Hero/HeroTitle";
import { useContext } from "react";
import { StoreContext } from "../../Context";

import hero from "../../../public/images/pastel-abstract.png";
import BookPreview from "../../components/Books/BookPreview/BookPreview";
const ShopPage = () => {
  const { products } = useContext(StoreContext);

  return (
    <>
      <Hero>
        <HeroContent imageSrc={hero}>
          <HeroTitle title="All Books" />
        </HeroContent>
      </Hero>
      <BookPreview products={products}></BookPreview>
    </>
  );
};

export default ShopPage;
