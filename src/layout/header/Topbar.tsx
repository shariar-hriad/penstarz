import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

type TitleProps = {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
    return (
        <span className='text-xs text-white transition-colors duration-500 group-hover:text-gray-500 lg:text-sm'>
            {children}
        </span>
    )
}

const Topbar = () => {
    return (
        <div className='flex h-[50px] items-center bg-secondary text-white'>
            <div className='container'>
                <div className='flex items-center gap-3'>
                    <Link href='tel:+19282551909' className='group flex items-center gap-2'>
                        <FaPhoneAlt className='text-sm text-teal-500' />
                        <Title> +19282551909</Title>
                    </Link>
                    <Link href='mailto:sales@penstarz.com' className='group flex items-center gap-2'>
                        <FaEnvelope className='text-sm text-teal-500' />
                        <Title>sales@penstarz.com</Title>
                    </Link>
                    <div className='ml-auto hidden items-center gap-2 lg:flex'>
                        <span className='text-sm text-white'>
                            700 South Blackbird Roost Street Flagstaff, AZ, 86001 United States Chelsea Chapman
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
