import './globals.css'
import { Inter } from 'next/font/google'
import { Source_Sans_3 } from 'next/font/google';
import { Noto_Sans_Display } from 'next/font/google';
import NavContainer from './navigation';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })
const notoSans = Noto_Sans_Display({ subsets: ['latin'] })

import { ThemeProvider } from './theme-provider';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.className} bg-background w-full`}>

        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <NavContainer />
            {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
  
};