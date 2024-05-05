import Container from "../Navigation/Container";
import defaultHero from "../../../public/images/pastel-abstract.png";
import styles from "./Hero.module.css";

const HeroContent = ({ imageSrc = defaultHero, children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.img_wrapper}>
        <img src={imageSrc} alt="banner" height="450px" />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContent;
