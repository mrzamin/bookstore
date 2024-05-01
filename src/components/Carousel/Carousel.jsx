import { useContext } from "react";
import { StoreContext } from "../../Context.jsx";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowIcon from "../../../public/icons/arrowIcon.png";

const sampleBooks = [
  "The Power of One More",
  "As a Man Thinkith",
  "The Power of Positive Thinking",
  "Mindset",
  "The Purpose Driven Life",
  "Good to Great",
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1000,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Carousel = () => {
  const { products } = useContext(StoreContext);

  const sample = sampleBooks.map((book) =>
    products.find((product) => product.title === book)
  );

  console.log(sample);

  return (
    <div className={styles.carousel}>
      <div>
        <Slider {...settings}>
          {sample.map((item) => (
            <Link to={`shop/${item.slug}`} key={item.id}>
              <div className={styles.carouselItem}>
                <img
                  src={item.src}
                  alt="book-cover"
                  className={styles.bookCover}
                />
                <div>{item.title}</div>
                <div className={styles.author}>{item.author}</div>
                <Link to={`shop/${item.slug}`} className={styles.callToAction}>
                  <div>Shop </div>
                  <img
                    src={arrowIcon}
                    className={styles.arrowIcon}
                    alt="arrow"
                  />
                </Link>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
