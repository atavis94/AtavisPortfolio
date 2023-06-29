'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function ToggleNav() {
    const pathname  = usePathname();
    
    return (
      <>
        {pathname === '/contact' ? (
          <Link href="/">Home</Link>
        ) : (
          <Link href="/contact">Contact</Link>
        )}
      </>
    );
  }
  