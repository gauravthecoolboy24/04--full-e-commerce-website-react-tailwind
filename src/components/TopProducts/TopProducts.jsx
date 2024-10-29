import Img1 from "../../assets/shirt/shirt.png"
import Img2 from "../../assets/shirt/shirt2.png"
import Img3 from "../../assets/shirt/shirt3.png"
import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];


const TopProducts = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 pt-5">
                <div className="container pb-5">


                    {/* {Header Section} */}
                    <div className="text-left mb-24 px-2 md:px-0" >
                        <p data-aos="fade-up" className="text-primary text-sm" >
                            Top Selling Products for you
                        </p>
                        <h1 data-aos="fade-up" className="text-3xl font-bold" >
                            Best Products
                        </h1>
                        <p data-aos="fade-up" className="text-xs text-gray-400" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
                        </p>
                    </div>



                    {/* {Body Section} */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mb-20">
                            {ProductsData.map((data) => (
                                // eslint-disable-next-line react/jsx-key
                                <div data-aos="zoom-in" className="bg-white dark:bg-gray-700 hover:bg-black/80 dark:hover:bg-primary rounded-2xl shadow-2xl p-5 hover:text-white relative duration-300 group max-w-[300px] transition-all" >

                                    {/* {Image section} */}
                                    <div key={data.id} className="h-[100px]">
                                        <img src={data.img} alt="" className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-lg" />
                                    </div>

                                    {/* {Detail section} */}
                                    <div className="p-2 text-center">
                                        <span data-aos="zoom-in" className="flex w-full mx-auto justify-center items-center gap-1 dark:text-white">
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                        </span>
                                        <h1 data-aos="zoom-in" className="font-bold text-xl ">{data.title}</h1>
                                        <p data-aos="zoom-in" className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2 ">{data.description}</p>
                                        <button data-aos="zoom-in" className="bg-gradient-to-r from-primary to-secondary group-hover:scale-105 group-hover:text-white mx-auto rounded-3xl px-4 py-1 mt-4">
                                            Order Now
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts
