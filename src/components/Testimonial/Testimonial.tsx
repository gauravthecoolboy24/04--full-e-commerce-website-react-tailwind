import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

var setting = {
  dots: true, 
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initailSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div  className="py-10 mb-10">
      <div className="container">


        {/* {Header Section} */}
        <div className="space-y-2 max-w-[600px] text-center mb-10 mx-auto" >
          <h1 data-aos="fade-up" className="text-primary/80 text-sm">What our customers are saying</h1>
          <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-2xl">Testimonials</h1>
          <p data-aos="fade-up" className="leading-3 text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sitasperiores modi Sit asperiores modi</p>
        </div>


        {/* {Testimonial cards} */}
        <div data-aos="zoom-in" className="">
          <Slider {...setting}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div key={data.id} className="flex flex-col shadow-xl py-12 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} className="rounded-full w-20 h-20" alt=""/>
                  </div>
                  <div className="flex items-center flex-col gap-4">
                    <div className="space-y-3">
                      <p className="text-xs mb-8 text-gray-500 leading-4 ">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
