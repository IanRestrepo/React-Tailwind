import { useState, useEffect } from 'react'
import { SunMoon } from 'lucide-react'

export const Navbar = () => {
    const [theme, setTheme] = useState("dark");

    const NavLinks = [ 
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" },
        { title: "Projects", path: "/projects" },
    ]
  
    const themeHandler = () => {
      if (theme === "dark") {
        setTheme("light")
      } else {
        setTheme("dark")
      }
    }
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }, [theme])
  
  return (
    <>
        <div className='w-1/2 dark:text-white flex justify-between items-center mx-auto bg-opacity-20'>
            <div className='border border-t-slate-400 rounded-full mx-auto py-3 px-2 my-5 dark:bg-slate-950 border-slate-700 cursor-pointer'>
                <ul className='flex justify-between'>
                    {
                        NavLinks.map((link, index) => (
                            <li className='px-5 py-2 hover:dark:bg-slate-700 mx-2 rounded-full transition-all hover:bg-slate-300' key={index}>
                                <a href={link.path}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
                <button className="bg-gray-950 px-4 py-2 text-white rounded-xl m-5" onClick={ themeHandler }>{ <SunMoon/> }</button>
        </div>
    </>
  )
}

