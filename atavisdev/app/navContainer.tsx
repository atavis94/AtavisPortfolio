'use client';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png';
import NavLinks from './navLinks';
import { useEffect, useState, useRef } from 'react';


export default function NavContainer() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const mobileMenuRef = useRef<HTMLDivElement | null>(null); 


    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen); 
    };

    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if the screen width is less than 768px
      if (window.innerWidth < 768) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        // If the screen width is larger than or equal to 768px, always show the navbar
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
    
      // Handle displaying the navbar on scroll.
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible, handleScroll]);

      // CLose the mobile menu when the user clicks outside of it.
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target as Node)
          ) {
            closeMobileMenu();
          }
        };
    
        if (isMobileMenuOpen) {
          document.addEventListener('click', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [isMobileMenuOpen]);
    
  return (
  <>
    <nav className={`${visible || isMobileMenuOpen ? 'opacity-100' : 'opacity-0' }
      text-white pb-5 pt-2 px-10 fixed top-0 inset-x-0 justify-start shadow-md
        flex gap-2 space-x-5 bg-zinc-950 z-50`}>

        <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
          <Link href="https://www.linkedin.com/in/aidan-f-085422b4/">
              <Image src={linkedinIcon} alt="Github" className="hover:cursor-pointer" width={30} height={30} />
          </Link>
        </div>
        <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
          <Link href="https://github.com/atavis94">
              <Image src={githubIcon} alt="Github" width={30} height={30} className='hover:cursor-pointer' />
          </Link>
        </div>
        <div className="md:hidden fixed inset-x-0 right-5 justify-end flex items-center">
          <button className="navbar-burger flex items-center text-zinc-300 p-3" onClick={toggleMobileMenu}>
            <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden visible pt-3 md:px-10 p-4 fixed inset-x-0 right-0 justify-end md:flex md:gap-2 space-x-5">
            <NavLinks />
        </div>  
    </nav>
    <nav className={`fixed left-0 h-full w-64 bg-zinc-950 text-white p-4 transform top-[65px] ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 `} ref={mobileMenuRef}>
      <ul className="space-y-4">
        <li>
          <Link
            href="#about"
            className="block text-sm md:text-lg underscore hover:text-purple-500" onClick={closeMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="#qualifications"
            className="block text-sm md:text-lg underscore hover:text-purple-500" onClick={closeMobileMenu}
          >
            QUALIFICATIONS
          </Link>
        </li>
        <li>
          <Link
            href="#showcase"
            className="block text-sm md:text-lg underscore hover:text-purple-500" onClick={closeMobileMenu}
          >
            SHOWCASE
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="block text-sm md:text-lg underscore hover:text-purple-500" onClick={closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </>
  );
}
