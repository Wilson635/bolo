import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Overlay from "react-overlay-component";
import Image from "next/image";

const AutoplaySlider = () => {
  const sliderData = [
    {
      image: "/assets/rt.png",
      title: "image 1",
    },
    {
      image: "/assets/person6.png",
      title: "Image 2",
    },
    {
      image: "/assets/person1.png",
      title: "Image 3",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-2 bg-white p-3">
        <FaArrowLeft onClick={onClick} className=" text-2xl text-black" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full border-2 bg-white p-3">
        <FaArrowRight onClick={onClick} className="text-2xl text-black" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // cssEase:"linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide) => (
        <div key={slide.title}>
          <Image
            className="w-200 h-200 animation: spin 1s linear infinite mx-auto overflow-hidden rounded-lg transition-opacity bg-red-100"
            src={slide.image}
            alt={slide.title}
            width={400}
            height={400}
            style={{ width: 175 }}
          />
          <h3 className="mt-4 text-2xl text-white">{slide.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default AutoplaySlider;
