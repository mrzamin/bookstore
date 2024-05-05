import Hero from "../components/Hero/Hero.jsx";
import HeroContent from "../components/Hero/HeroContent.jsx";
import HeroTitle from "../components/Hero/HeroTitle.jsx";
import { useContext } from "react";
import { StoreContext } from "../Context.jsx";
import BookList from "../components/Books/BookList/BookList.jsx";

const PageTemplate = ({ hero, title, filter }) => {
  const { products } = useContext(StoreContext);

  let productsToDisplay;
  if (filter) {
    productsToDisplay = products.filter(
      (product) => product.category === filter
    );
  } else {
    productsToDisplay = products;
  }

  return (
    <>
      <Hero>
        <HeroContent imageSrc={hero}>
          <HeroTitle title={title} />
        </HeroContent>
      </Hero>
      <BookList products={productsToDisplay}></BookList>
    </>
  );
};

export default PageTemplate;
