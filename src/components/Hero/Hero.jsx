import Image1 from '../../assets/Hero/women.png'
import Image2 from '../../assets/Hero/shopping.png'
import Image3 from '../../assets/Hero/sale.png'
import Slider from 'react-slick'


const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Upto 50% off Men's Wear",
    description: "With the SELECTED HOMME Sale, discover superior quality blazers, trousers, T-shirts, pullovers, shirts, and much more at incredible prices"
  },
  {
    id: 2,
    img: Image1,
    title: "30% off on all Women's Wear",
    description: "Get ready to upgrade your wardrobe with our incredible 30% off sale on all women's wear. For a limited time, enjoy massive discounts on our entire collection of tops, bottoms, dresses, outerwear, and more."
  },
  {
    id: 3,
    img: Image3,
    title: "70% off all product Sale",
    description: "Get ready for the sale of the season! For one day only, enjoy an incredible 70% off all products across our entire range. From fashion must-haves to home essentials, don't miss out on this opportunity to score amazing deals."
  },
]

const Hero = () => {

  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-900 dark:text-white transition-all duration-200'>

      {/* {background Pattern} */}
      <div className='w-[700px] h-[700px] bg-primary/40 -top-1/2 absolute right-0 rounded-3xl rotate-45'></div>

      {/* {hero section} */}
      <div className='container pb-8 sm:pb-0'>

        <Slider {...setting}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>


                {/* {text content section} */}
                <div className=' flex flex-col justify-center text-center sm:text-left gap-4 pt-12 sm:pt-0 order-2 sm:order-1 relative z-10 '>
                  
                  <h1 data-aos="zoom-out" data-aos-once="true" data-aos-duration="500" className='text-5xl sm:text-6xl font-bold lg:text-7xl'>
                    {data.title}
                  </h1>

                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm '>
                    {data.description}
                  </p>

                  <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300">
                    <button className='bg-gradient-to-r text-white py-1 px-4 rounded-full from-primary to-secondary transition-all duration-200 items-center hover:scale-105'>
                      Order now
                    </button>
                  </div>

                </div>


                {/* {image section} */}
                <div className='order-1 sm:order-2 '>
                  <div className='relative z-10' data-aos="zoom-in" data-aos-once="true">
                    <img src={data.img} alt="image" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 mx-auto lg:scale-120 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}

export default Hero
