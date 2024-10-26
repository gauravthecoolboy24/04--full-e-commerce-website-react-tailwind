import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
import { useEffect, useState } from 'react'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } 
  },[element.classList, theme])


  return (
    <div className='relative'>
      <img onClick={() => setTheme(theme === 'light' ? "dark" : "light")} src={LightButton} alt="" className={`w-12 cursor-pointer drop-shadow-sm transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} 
      />
      <img onClick={() => setTheme(theme === 'light' ? "dark" : "light")} className='w-12 cursor-pointer drop-shadow-sm transition-all duration-300' src={DarkButton} alt=""
      />
    </div>
  )
}

export default DarkMode
