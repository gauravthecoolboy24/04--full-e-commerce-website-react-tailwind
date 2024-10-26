import Img1 from '../../assets/women/women.png'
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.jpg'
import Img4 from '../../assets/women/women4.jpg'
import { FaStar } from "react-icons/fa6";

const Products = () => {

    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Women's Ethnic",
            rating: 5.0,
            color: "White",
            aosDelay: "0"
        },
        {
            id: 2,
            img: Img2,
            title: "Women's Western",
            rating: 4.5,
            color: "Red",
            aosDelay: "200"
        },
        {
            id: 3,
            img: Img3,
            title: "Goggles",
            rating: 4.7,
            color: "Brown",
            aosDelay: "400"
        },
        {
            id: 4,
            img: Img4,
            title: "Printing T-Shirt",
            rating: 4.4,
            color: "Yellow",
            aosDelay: "600"
        },
        {
            id: 5,
            img: Img2,
            title: "Fashion T-Shirt",
            rating: 4.1,
            color: "Pink",
            aosDelay: "800"
        },
    ]

    return (
        <div className="mt-14 mb-12 ">
            <div>

                {/* {Header Section} */}
                <div className="text-center mb-10 max-w-[600px] mx-auto " data-aos="fade-up">
                    <h1 className="text-3xl font-bold" data-aos="fade-up">Products</h1>
                    <p className="text-xs text-gray-400" data-aos="fade-up">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
                    </p>
                </div>


                {/* {Body Section} */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 place-items-center gap-5">

                        {/* card-section */}
                        {ProductsData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className=' space-y-3'>
                                <div className=''>
                                    <img className='h-[220px] w-[150px] object-cover rounded-lg' src={data.img} alt="" />
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400'/>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
