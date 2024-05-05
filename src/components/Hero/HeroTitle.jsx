import styles from "./Hero.module.css";

const HeroTitle = ({ title }) => {
  return <h1 className={styles.hero_title}>{title}</h1>;
};

export default HeroTitle;
