import Image from 'next/image'
import Link from 'next/link'
import { BiSend } from 'react-icons/bi'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-gray-50 py-[30px] lg:py-[60px]'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {/* Site Info */}
                    <div className='flex basis-1/3 flex-col gap-y-2 p-3'>
                        <Link href='/'>
                            <Image src='/logo3.png' alt='' width='150' height='70' />
                        </Link>
                        <Link href='tel:+19282551909' className='group flex items-center gap-2'>
                            <FaPhoneAlt className='text-sm text-teal-500' />
                            <span className='text-2xl font-medium text-teal-500 transition-colors duration-500 group-hover:text-teal-400'>
                                +19282551909
                            </span>
                        </Link>
                        <Link href='mailto:sales@penstarz.com' className='group flex items-center gap-2'>
                            <FaEnvelope className='text-sm text-teal-500' />
                            <span className='text-sm text-teal-500 transition-colors duration-500 group-hover:text-gray-500'>
                                sales@penstarz.com
                            </span>
                        </Link>
                        <div className='ml-auto flex items-center gap-2'>
                            <span className='text-sm text-indigo-500'>
                                700 South Blackbird Roost Street Flagstaff, AZ, 86001 United States Chelsea Chapman
                            </span>
                        </div>
                    </div>

                    <div className='basis-1/3 p-3'>
                        <h3 className='cap mb-[25px] text-[22px] font-medium capitalize'>About Us</h3>
                        <p className='text-sm'>
                            Penstraz, we are committed to delivering exceptional value and high-quality service to our
                            customers. Our mission is to help our customers unlock the full potential of their content
                            and services, and we strive to do this by providing them with easy-to-use tools and
                            intuitive features, as well as a user-friendly and secure platform.
                        </p>
                    </div>

                    <div className='basis-1/3 p-3'>
                        <h3 className='cap mb-[25px] text-[22px] font-medium capitalize'>subscribe newsletter</h3>
                        <p className='mb-5 text-sm'>Subscribe our newsletter gor get notification about new updates.</p>
                        <div className='flex overflow-hidden rounded-full bg-white p-[3px] shadow-card'>
                            <input
                                className='h-[60px] w-full border-none px-6 outline-none'
                                type='email'
                                placeholder='Email adress'
                            />
                            <button className='flex h-[60px] w-[100px] items-center justify-center rounded-full bg-teal-500'>
                                <BiSend className='text-white' fontSize='25px' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
