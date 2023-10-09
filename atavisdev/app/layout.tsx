import './globals.css'
import { Inter } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google';
import NavContainer from './navigation';

const inter = Inter({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
  title: 'Atavis Development',
  description: 'Atavis is a software developer based in Adelaide, South Australia.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <body className={`${sourceSans.className} body-svg-wires-light w-full text-white`}>

        <NavContainer />
        {children}
      </body>
    </html>
  );
  
};