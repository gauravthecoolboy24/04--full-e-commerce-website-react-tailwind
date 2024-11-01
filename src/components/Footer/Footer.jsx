import Banner from '../../assets/website/footer-pattern.jpg'
import footerLogo from '../../assets/trolley.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    width: '100%',
    height: '100%'
}


const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]


const Footer = () => {
    return (
        <div>
            <div style={BannerImg} className='text-white'>
                <div className='container'>
                    <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-48 pt-10 '>


                        {/* {Company Details} */}
                        <div className='py-8 px-4 space-y-5 f'>
                            <h1 className='flex gap-4 mb-3 text-justify items-end text-3xl sm:text-4xl font-bold '>
                                <img className='w-[50px] ' src={footerLogo} alt="" />
                                Shopsy
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                        </div>


                        <div className='grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2'>
                            {/* {Footer Links1} */}
                            <div className='py-8'>
                                <h1 className='sm:text-2xl text-lg font-bold sm:text-left text-justify mb-3'>
                                    Important Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li key={data.title} className='cursor-pointer hover:text-primary hover:translate-x-2 duration-300'>
                                                <span>{data.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* {Footer Links 2} */}
                            <div className='py-8'>
                                <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3'>
                                    Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => (
                                            <li key={data.title} className='cursor-pointer  hover:text-primary hover:translate-x-2 duration-300'>
                                                <span>{data.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* {Social Links} */}
                            <div>
                                <div className="flex text-center mt-5">
                                    <a className='flex gap-5 ' href="#">
                                        <FaInstagram className='text-4xl text-white' />
                                        <FaFacebook className='text-4xl text-white' />
                                        <FaLinkedin className='text-4xl text-white' />
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <div className='flex items-center gap-4 '>
                                        <FaLocationArrow/>
                                        <p>Gwalior, Madhya Pradesh</p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <FaMobileAlt />
                                        <p>8109183734</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-left 
                                         text-white text-lg font-bold'>Follow us on social media</p>
                                        <p className='text-left text-white'>Copyright 2023. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer
