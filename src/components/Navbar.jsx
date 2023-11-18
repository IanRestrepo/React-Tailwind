import React from 'react'

export const Navbar = () => {

    const NavLinks = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Contact', path: '/contact'}
    ]

  return (
    <div className=''>
        <div className='mx-auto border-2 border-red-500 w-1/2 py-2 rounded-full m-5'>

            <ul className='flex justify-between'>
                {
                    NavLinks.map((Link, index) => (

                        <li key={index} className='px-7 py-2 mx-5 hover:bg-slate-700 border border-blue-500 rounded-full'><a href={Link.path}>{Link.name}</a></li>

                    ))
                }
            </ul>
            
        </div>
    </div>
  )
}
