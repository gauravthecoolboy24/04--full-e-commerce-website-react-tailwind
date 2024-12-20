import BannerImg from '../../assets/women/women2.jpg'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container border">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

                    {/* {Image Section} */}
                    <div data-aos="zoom-in">
                        <img src={BannerImg} alt="" className='max-w-[450px] min-h-[400px] w-full my-4 mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.8)]'/>
                    </div>

                    {/* {Text Details Section} */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 text-xl h-full px-2 sm:px-0 mx-2'>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% Off</h1>
                        <p data-aos="fade-up" className='text-sm tracking-wider leading-5 text-gray-500 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option</p>

                        <div className='flex flex-col gap-7'>                            
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GrSecure className='w-12 h-12 shadow-sm p-4 bg-violet-100 rounded-full dark:bg-violet-400' />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <IoFastFood className='w-12 h-12 shadow-sm p-4 bg-orange-100 rounded-full dark:bg-orange-400' />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='w-12 h-12 shadow-sm p-4 bg-green-100 rounded-full dark:bg-green-400' />
                                <p>Easy Payment method</p>
                            </div>
                            <div data-aos="fade-up" className='flex items-center gap-4'>
                                <GiFoodTruck className='w-12 h-12 shadow-sm p-4 bg-yellow-100 rounded-full dark:bg-yellow-400' />
                                <p>Get Offers</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
