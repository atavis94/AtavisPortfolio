'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function NavLinks() {
    const pathname  = usePathname();

    // document.addEventListener("DOMContentLoaded", function () {
    //   const navLinks = document.querySelectorAll("nav a");
    
    //   navLinks.forEach((link) => {
    //     link.addEventListener("click", (e) => {
    //       e.preventDefault();
    //       const targetId = link.getAttribute("href").substring(1); // Remove the "#" symbol
    //       const targetElement = document.getElementById(targetId);
    
    //       if (targetElement) {
    //         targetElement.scrollIntoView({ behavior: "smooth" });
    //       }
    //     });
    //   });
    // });
    
    
    return (
      <>
          <Link className="underscore text-sm md:text-lg" href="#about">ABOUT</Link>        
          <Link className="underscore text-sm md:text-lg" href="#qualifications">QUALIFICATIONS</Link>
          <Link className="underscore text-sm md:text-lg" href="#showcase">SHOWCASE</Link>
          <Link className="underscore text-sm md:text-lg" href="#contact">CONTACT</Link>
      </>
    );
  }
  