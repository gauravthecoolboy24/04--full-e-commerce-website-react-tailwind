import OrangeBanner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage: `url(${OrangeBanner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    heigth: '100%'
}

const Subscribe = () => {
    return (
        <div data-aos="zoom-in" className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}>
            <div className='container backdrop-blur-sm py-10 '>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 data-aos="fade-up" className='sm:text-3xl !text-center sm:text-left text-xl font-bold'>Get Notification about new Product</h1>
                    <input type="text" data-aos="fade-up" placeholder='Enter Your Email' className='w-full p-3 '/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
