import trolley from '../../assets/trolley.png'
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import PropTypes from 'prop-types';


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#"
    },
];
const DropDownLinks = [
    {
        id: 1,
        name: "Trending Product",
        link: "/#"
    },
    {
        id: 2,
        name: "New Arrival",
        link: "/#"
    },
    {
        id: 3,
        name: "Best Seller",
        link: "/#"
    }
];

const Navbar = ({handleOrderPopup}) => {

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50'>

            {/* {Upper Navbar} */}
            <div className=' bg-primary/40 py-2'>
                <div className='container flex justify-between items-center '>


                    {/* {LOGO} */}
                    <div>
                        <a className='font-bold text-xl sm:text-2xl flex gap-2' href="/#">
                            <img className='w-10 uppercase  h-8 ' src={trolley} alt="Logo" />
                            Shopsy
                        </a>
                    </div>


                    {/* {right side of start bar} */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* {Search bar } */}
                        <div className='group relative items-center sm:block'>
                            <input type="text" placeholder='search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] rounded-xl transition-all duration-500 border-gray-400 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-800"
                            />
                            <FaSearch className='text-gray-500 group-hover:text-primary absolute top-[50%] -translate-y-[50%] right-3' />
                        </div>

                        {/* {button order} */}
                        <div className='flex gap-3 top-1 items-center'>
                            <button onClick={() => {handleOrderPopup()}} className='bg-gradient-to-r text-white py-1 px-4 rounded-full from-primary to-secondary transition-all duration-200 flex items-center gap-3 group'>
                                <span className='group-hover:block hidden transition-all duration-200'> Order</span>
                                <FaCartShopping className='text-xl test-white drop-shadow-sm cursor-pointer' />
                            </button>

                            {/* {Dark Mode Switch} */}
                            <div>
                                <DarkMode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* {Lower Navbar} */}
            <div data-aos="zoom-in" className='flex justify-center'>
                <ul className='sm:flex items-center py-2 gap-4 hidden'>
                    {Menu.map((data) => (
                        <li key={data.id} >
                            <a href={data.link} className='inline-block w-full text-xl px-4 transition-all hover:text-primary duration-200'>{data.name}</a>
                        </li>
                    ))}

                    {/* {Simple dropdown and Links} */}

                    <li className='group relative'>
                        <a className='flex text-xl items-center gap-[2px] ' href="#">Trending Products<span>
                            <FaCaretDown className='group-hover:rotate-180 transition-all duration-200 ' />
                        </span>
                        </a>
                        <div className='absolute hidden z-[9999] w-auto group-hover:inline-block rounded-md bg-white text-black p-2 shadow-md'>
                            <ul>
                                {DropDownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block p-1 hover:m-auto transition-all duration-200 hover:bg-primary/20 hover:rounded-md'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>        
    )
}

Navbar.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar
