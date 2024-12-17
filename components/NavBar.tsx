"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from "@/components/ui/button"
import { ModeToggle } from './theme-toggle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
import MobileNav from './mobile-nav'
import { Menu } from 'lucide-react'



const NavBar = () => {
    const [progress, setProgress] = useState(0)
    const pathname = usePathname();
    
    // This runs whenever page changes to some other page
    useEffect(() => {
        setProgress(30)
        
        setTimeout(() => { 
            setProgress(70)
        }, 100);

        setTimeout(() => { 
            setProgress(100)
        }, 800);
       
    }, [pathname])
    useEffect(() => {
        setTimeout(() => { 
            setProgress(0)
        }, 900);
    }, [])
    
    return (
        <nav className='h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <LoadingBar
                color='#6028ff'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='text-xl -ml-4 font-bold md:text-2xl whitespace-nowrap sm:mr-10'>

               <h1>
               <Link href={"/"}>
               Sai Kiran Portfolio
                </Link>
               </h1>
            </div>
            <ul className='hidden md:flex w-full items-center -ml-4 justify-end space-x-6'>
  <li>
    <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-[#FC8112] dark:hover:text-[#FC8112] transition-all duration-300">
      Home
    </Link>
  </li>
  <li>
    <Link href="/projects" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-[#FC8112] dark:hover:text-[#FC8112] transition-all duration-300">
      My Projects
    </Link>
  </li>
  <li>
    <Link href="/blog" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-[#FC8112] dark:hover:text-[#FC8112] transition-all duration-300">
      Blogs
    </Link>
  </li>
  <li>
    <Link href="/contact" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-[#FC8112] dark:hover:text-[#FC8112] transition-all duration-300 md:mr-6">
      Contact
    </Link>
  </li>
</ul>



            <ModeToggle />
            <div className="flex items-center justify-end sm:hidden">
              <Sheet>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                  <MobileNav />
                </SheetContent>
              </Sheet>
            </div>
        </nav>
    )
}
export default NavBar