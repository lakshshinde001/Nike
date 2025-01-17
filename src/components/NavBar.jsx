import React from 'react'
import { headerLogo} from '../assets/images/index'

import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons/index'

const NavBar = () => {
  return (
    <header className='padding-x py-8 w-full absolute z-10'>
        <nav className='flex justify-between max-container'>
            {/* Logo */}
           <a href='/'>
            <img
                src={headerLogo}
                alt='logo'
                width={130}
                height={29}
            />
           </a>
            {/* List of Items */}
            <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden '> 

                {
                    navLinks.map((item) =>(
                        <a 
                            href={item.href}
                            className="font-montserrat text-lg leading-normal text-slate-gray"
                        >
                            {item.label}
                        </a>
                    ) )
                }
            </ul>

            {/* Hamberger menu */}
            <div className="hidden max-lg:block">
                <img
                    src={hamburger}
                    height={25}
                    width={25}
                    alt='hamberger'
                />
            </div>

           
                <a
                    href='/login'
                    className="font-montserrat text-lg leading-normal text-black max-lg:hidden"
                >
                    Login or Sign up Here
                </a>
            
        </nav>
        
    </header>
  )
}

export default NavBar