import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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

type NavbarProps = {
    topbarRef: React.MutableRefObject<any>
}

const Navbar = ({ topbarRef }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const main = document.querySelector('main')
        const topbar = topbarRef.current.clientHeight

        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop >= topbar) {
                setIsScrolled(true)
                main?.classList.add(`pt-[${topbar}]`)
            } else {
                setIsScrolled(false)
                main?.classList.remove(`pt-[${topbar}]`)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [topbarRef])

    return (
        <nav
            className={`flex h-[80px] items-center bg-white transition-all ${
                isScrolled ? 'sticky top-0 z-50 w-full bg-white/90 shadow backdrop-blur' : null
            }`}
        >
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
                            <li key={i}>
                                <SmoothLink
                                    activeClass='text-gray-600'
                                    to={navlink.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className='cursor-pointer rounded p-3 text-base font-medium capitalize text-black-500 transition-all hover:text-gray-500'
                                    onClick={() => setIsOpen(false)}
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
