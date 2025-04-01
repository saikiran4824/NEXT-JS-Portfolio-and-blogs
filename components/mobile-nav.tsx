import React from 'react'
import Link from 'next/link'

interface MobileNavProps {
  onMenuItemClick: () => void; // Accepts the prop to close the menu
}

const MobileNav: React.FC<MobileNavProps> = ({ onMenuItemClick }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/projects" onClick={onMenuItemClick} className="">
            My Projects
          </Link>
        </li>
        <li>
          <Link
            href="https://saikiran-blogs-app-prsk.vercel.app/blog"
            target="_blank"
            onClick={onMenuItemClick}
            className=""
          >
            My Blogs
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={onMenuItemClick} className="">
            Contact Me
          </Link>
        </li>
        <div className="buttons gap-2 flex text-xsm">
        </div>
      </ul>
    </div>
  )
}

export default MobileNav;
