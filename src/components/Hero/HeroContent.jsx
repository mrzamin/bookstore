import Container from "../Navbar/Container";

import hero from "../../../public/images/pastel-abstract.png";

const HeroContent = ({ imageSrc = defaultBanner, children }) => {
  return (
    <div className="hero">
      <div className="img_wrapper">
        <img src={imageSrc} alt="banner" height="450px" />
        <div className="overlay"></div>
      </div>
      <div className="content">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContent;
