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
          <Link className="underscore" href="#about">ABOUT</Link>        
          <Link className="underscore" href="#qualifications">QUALIFICATIONS</Link>
          <Link className="underscore" href="#showcase">SHOWCASE</Link>
          <Link className="underscore" href="#contact">CONTACT</Link>
      </>
    );
  }
  