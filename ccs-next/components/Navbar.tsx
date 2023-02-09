import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose, AiFillHeart} from 'react-icons/ai'
import { isClassStaticBlockDeclaration, setConstantValue } from 'typescript';
import Image from 'next/image'
import { icons } from 'react-icons/lib';

//Toggle menu for Navbar. When menu/hamburger button is clicked, sets state of showing the menu and chaning menu icons 
const Navbar = () =>{
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        //header stays at the top
        <header className = 'absolute top-0 w-full'>

            <nav className='flex items-center justify-between mb-0 px-4 h-24 w-full lg:px-24 bg-ccs-primary text-base '>

                <Link href = '/'><Image src="/img/logo.png" alt = "logo" width="72" height="72" className='w-16 md:w-20 lg:w-20' /></Link>
                
                {/* Hide title text when the user on large (1024px) screens - compensates space on screen sizes. */}
                <Link href = '/'><div className = 'inline-block align-middle lg:hidden xl:inline-block'>Childhood Cancer Society</div></Link>

                {/* For large (1024px) screens. Otherwise hidden.  */}
                <ul className = 'hidden lg:flex'>
                    <li className='inline-block px-4'><Link href = '/'>Home</Link></li>
                    <li className='inline-block px-4'><Link href = '/program'>Adventure Ted Program</Link></li>
                    <li className='inline-block px-4'><Link href = '/events'>Events</Link></li>
                    <li className='inline-block px-4'><Link href = '/volunteer'>Volunteer</Link></li>
                    <li className='inline-block px-4'><Link href = '/store'>Store</Link></li>
                    <li className='inline-block px-4'><Link href = '/about'>About</Link></li>
                    <li className='inline-block px-4'><Link href = '/contract'>Contact</Link></li>
                </ul>

                {/* For extra small (360px) screens up to large (1024px) screens. Hidden behind a menu button. Default state 
                (nav = false, menu/hamburger button not clicked), hide the menu. When menu/hamburger is clicked, nav = true, show menu*/}
                <div className = {
                    nav ? 'lg:hidden absolute z-11 top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen pt-4 bg-ccs-primary text-center ease-in duration-300'
                    : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen pt-4 bg-ccs-primary text-center ease-in duration-300'}>
                    <ul>
                        <li className='p-4'><Link href = '/'>Home</Link></li>
                        <li className='p-4'><Link href = '/program'>Adventure Ted Program</Link></li>
                        <li className='p-4'><Link href = '/events'>Events</Link></li>
                        <li className='p-4'><Link href = '/volunteer'>Volunteer</Link></li>
                        <li className='p-4'><Link href = '/store'>Store</Link></li>
                        <li className='p-4'><Link href = '/about'>About</Link></li>
                        <li className='p-4'><Link href = '/contract'>Contact</Link></li>
                    </ul>
                </div>

                {/* Mobile Button Icon changes when clicked. Reveals menu on mobile. Utilizes ReactIcon library*/}
                <div onClick = {handleNav} className = 'block lg:hidden  z-10'>
                    {nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size ={20}/>}
                </div>
                
                {/* Donate button. Hidden on extra small (360px) screens up to large (1024px) screens. Utilizes ReactIcon library */}
                <button className= 'hidden lg:block bg-ccs-secondary text-white ml-4 py-2 px-4 sm:py-2.5 sm:px-8 rounded'><div className = 'items-center'>
                    {<AiFillHeart size ={16} className = 'mr-2 h-6 inline-block align-top'/>}<div className = 'inline-block align-top text-base'>Donate</div></div>
                </button>
                
            </nav>
                
                 {/* Donate button. Visible on extra small (360px) screens up to large (1024px) screens. Utilizes ReactIcon library */}
                <div className = 'lg:hidden flex justify-end bg-ccs-secondary text-white h-10 px-4 w-full'>
                        <a className = 'flex items-center' href = ""> 
                            {<AiFillHeart size ={16} className = 'mr-2 h-6'/>}<div className = 'text-base'>Donate</div>
                        </a>
                </div>

        </header>
        
        
        
    );
}

export default Navbar;