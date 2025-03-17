import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'

const MobileNav = () => {
  return (
    <div>
        <ul className="flex flex-col gap-4">
           
            <li>
            <Link href="/projects" className="">My Projects</Link>
            </li>
            <li>
                <Link href="https://saikiran-blogs-app-prsk.vercel.app/blog" className="" target="_blank">
                  My Blogs
                </Link>
              </li>
            <li>
            <Link href="/contact" className="">Contact Me</Link>
            </li>
            <div className="buttons gap-2 flex text-xsm">
            </div>
        </ul>
    </div>
  )
}

export default MobileNav
