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
    const [isOpen, setIsOpen] = useState(false) // State to manage menu open/close
    const pathname = usePathname();
    
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
    
    // Function to handle closing the menu when a menu item is clicked
    const handleMenuItemClick = () => {
        setIsOpen(false); // Close the menu
    }

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
            
            {/* Desktop Links */}
            <ul className='hidden md:flex w-full items-center -ml-4 justify-end space-x-6'>
                <li>
                    <Link href="/projects" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-[#949290] transition-all duration-300">
                        My Projects
                    </Link>
                </li>
                <li>
                    <Link href="https://saikiran-blogs-app-prsk.vercel.app/blog" target="_blank" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-[#949290] transition-all duration-300">
                        My Blogs
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-[#949290] transition-all duration-300 md:mr-6">
                        Contact Me
                    </Link>
                </li>
            </ul>

            {/* Mode Toggle */}
            <ModeToggle />

            {/* Mobile Navigation Toggle (hamburger menu) */}
            <div className="flex items-center justify-end sm:block md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}> {/* Manage open state */}
                    <SheetTrigger>
                        {/* Hamburger Menu Icon */}
                        <Menu className="text-2xl text-gray-800 dark:text-white" />
                    </SheetTrigger>
                    <SheetContent>
                        {/* Pass handleMenuItemClick to close the menu when a menu item is clicked */}
                        <MobileNav onMenuItemClick={handleMenuItemClick} />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default NavBar;
