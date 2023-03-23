import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as SmoothLink } from 'react-scroll/modules'

type SidebarProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const navlinks = [
    { id: 'home', link: 'home' },
    { id: 'feature', link: 'feature' },
    { id: 'weoffer', link: 'we offer' },
    { id: 'about', link: 'about' },
    { id: 'contact', link: 'contact' },
    { id: 'login', link: 'login' },
]

const SidebarMenu = ({ setIsOpen }: SidebarProps) => {
    return (
        <AnimatePresence>
            <motion.aside
                initial={{ left: '-100vw' }}
                animate={{ left: '0' }}
                exit={{ left: '-100vw' }}
                transition={{
                    type: 'spring',
                }}
                className='fixed inset-0 z-50 flex w-full max-w-[280px]  items-start gap-4 bg-gray-100 py-16 px-[15px] lg:hidden'
            >
                <ul className='flex flex-1 flex-col gap-5'>
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
                <button
                    className='rounded-md bg-gray-500 p-3 text-lg text-white shadow-card'
                    onClick={() => setIsOpen(false)}
                >
                    <FaTimes />
                </button>
            </motion.aside>
        </AnimatePresence>
    )
}

export default SidebarMenu
