import { useContext } from "react";
import { StoreContext } from "../../Context.jsx";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

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
                <div className={styles.pleaseCenter}>
                  {" "}
                  <img
                    src={item.src}
                    alt="book-cover"
                    className={styles.bookCover}
                  />
                  <div>{item.author}</div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
