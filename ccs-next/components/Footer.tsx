import Link from 'next/link';
import React from 'react';
import {AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';
import {SlSocialLinkedin} from 'react-icons/sl';
import Image from 'next/image'


const Footer = () =>{

    return(
        //Layout is dependent on screen sizes. Extra small (360px) screens are in a one column layout up to extra large screens (1440px) which a two column layout takes place
        <footer className='grid xs:grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-x-28 bg-ccs-primary text-base w-full px-4 py-16 justify-between md:px-24' >

            {/* Two column layout for site map on extra small (360px) screens to larger (1024px) screens. Three column (custom) layout for larger (1024px) screens. */}
            <div className = 'grid xs:grid-cols-2 xs:justify-evenly lg:grid-cols-3f gap-x-8 gap-y-6 justify-between justify-self-center xl:justify-self-start '>
                <ul>
                    <li className="py-2">Adventure Ted Program</li>
                    <li className='text-xs'><Link href = '/program'>Adventure Ted Program</Link></li>
                    <li className='text-xs'><Link href = '/apply'>Apply</Link></li>
                </ul>

                <ul>
                    <li className="py-2">Events</li>
                    <li className='text-xs'><Link href = '/upcoming-events'>Upcoming events</Link></li>
                    <li className='text-xs'><Link href = '/past-events'>Past events</Link></li>
                </ul>

                <ul>
                    <li className="py-2">Volunteer</li>
                    <li className='text-xs'><Link href = '/why-volunteer'>Why volunteer?</Link></li>
                    <li className='text-xs'><Link href = '/volunteer-opportunities'>Volunteer opportunities</Link></li>
                </ul>

                <ul>
                    <li className="py-2">About</li>
                    <li className='text-xs'><Link href = '/about-ccs'>About CCS</Link></li>
                    <li className='text-xs'><Link href = '/founder-message'>Message from our founder</Link></li>
                    <li className='text-xs'><Link href = '/how-to-help'>How you can help</Link></li>
                </ul>

                <ul>
                    <li className="py-2">Store</li>
                    <li className='text-xs'><Link href = '/ccs-store'>Why volunteer?</Link></li>
                    <li className='text-xs'><Link href = '/about-store'>About CCS store</Link></li>
                </ul>

                <ul>
                    <li className="py-2">Contact</li>
                    <li className='text-xs'><Link href = '/phone'>555-555-5555</Link></li>
                    <li className='text-xs'><Link href = '/address'>12345 ST City, State 98765</Link></li>
                    <li className='text-xs'><Link href = '/email'>email@ccs.org</Link></li>
                </ul>
            </div>
            
            {/* Logo, search, and site information in one column. */}
            <div className='flex flex-col xl:justify-self-end'>
                <Link href = '/'><Image src="/img/logo.png" alt = "logo" width="176" height="176" className='w-44 content-center mx-auto mb-4'/></Link>
                <input type="text" placeholder='Search' name="search" id="search" className = 'content-center mx-auto bg-white rounded-lg p-1 xs:min-w-[50%] xl:min-w-[80%] mb-4' />
                <div className = 'mx-auto'>&copy; Childhood Cancer Society | <Link href = 'accessibility'>Accessibility</Link> | <Link href = 'privacy-policy'>Privacy Policy</Link></div>
            </div>
            
            {/* Social media links on one line. Utilizes ReactIcon library*/}
            <div className = "flex flex-row xs:justify-center xl:justify-start">
                {/* Instagram */}
                <a href = 'https://www.instagram.com/childhoodcancersociety/' target="_blank" rel="noopener noreferrer" className='mr-10' ><AiOutlineInstagram size ={40}/></a>
                {/* YouTube */}
                <a href = 'https://www.youtube.com/channel/UCnca1uLAMGTTbODJgwF04jA' target="_blank" rel="noopener noreferrer" className='mr-10'><AiOutlineYoutube size ={40}/></a>
                {/* Facebook */}
                <a href = 'https://www.facebook.com/ChildhoodCancerSociety' target="_blank" rel="noopener noreferrer" className='mr-10' ><AiOutlineFacebook size ={40}/></a>
                {/* Twitter */}
                <a href = 'https://mobile.twitter.com/cancersocietyus' target="_blank" rel="noopener noreferrer" className='mr-10'><FiTwitter size ={40}/></a>
                {/* LinkedIn */}
                <a href = 'https://www.linkedin.com/company/childhood-cancer-society' target="_blank" rel="noopener noreferrer" className='mr-10'><SlSocialLinkedin size ={40}/></a>
            </div>

        </footer>
        
        
        
    );
}

export default Footer;