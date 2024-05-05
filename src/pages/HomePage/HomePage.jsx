import Hero from "../../components/Hero/Hero";
import HeroContent from "../../components/Hero/HeroContent";
import HeroTitle from "../../components/Hero/HeroTitle";
import { Link } from "react-router-dom";
import hero from "../../../public/images/pastel-abstract.png";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <Hero>
        <HeroContent imageSrc={hero}>
          <HeroTitle title="Thinkfolio Bookstore" />
          <Link to="/shop">
            <button className={styles.shopAllButton}>Shop All</button>
          </Link>
        </HeroContent>
      </Hero>
      <Carousel />
    </>
  );
};

export default HomePage;
