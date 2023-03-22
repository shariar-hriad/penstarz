import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as SmoothLink } from 'react-scroll/modules'
import SidebarMenu from './SidebarMenu'

const navlinks = [
    { id: 'home', link: 'home' },
    { id: 'feature', link: 'feature' },
    { id: 'weoffer', link: 'we offer' },
    { id: 'about', link: 'about' },
    { id: 'contact', link: 'contact' },
    { id: 'login', link: 'login' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='flex h-[80px] items-center shadow-sm'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link href='/'>
                        <Image src='/logo3.png' alt='' width='150' height='70' priority />
                    </Link>

                    {/* Mobile menu */}
                    <button className='lg:hidden' type='button' onClick={() => setIsOpen(true)}>
                        <FaBars fontSize={20} />
                    </button>

                    {/* Desktop menu */}
                    <ul className='hidden gap-5 lg:flex'>
                        {navlinks.map((navlink, i) => (
                            <li
                                key={i}
                                className='cursor-pointer rounded px-5 text-base font-medium capitalize text-black-500 transition-colors duration-300 hover:text-gray-500'
                            >
                                <SmoothLink
                                    activeClass='active'
                                    to={navlink.id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    {navlink.link}
                                </SmoothLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && <SidebarMenu setIsOpen={setIsOpen} />}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: 'easeInOut',
                    }}
                    onClick={() => setIsOpen(false)}
                    className='fixed inset-0 z-40 bg-black-900/60 lg:hidden'
                />
            )}
        </nav>
    )
}

export default Navbar

//   git config --global user.email "shariarhossainriad@gmail.com"
//   git config --global user.name "shariar-hriad"
