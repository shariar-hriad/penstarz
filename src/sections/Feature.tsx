import Section from '@/components/common/Section'
import { BsFillGearFill } from 'react-icons/bs'
import { FaSms } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'

export const features = [
    {
        id: 1,
        icon: <FiPhoneCall />,
        title: 'VOICE',
        description:
            'High-priced premium numbers are utilized by companies offering content to connect with their customers and advertise their offerings in various regions. These numbers come at a higher cost compared to standard call rates.',
    },
    {
        id: 2,
        icon: <FaSms />,
        title: 'IPRN SMS',
        description:
            'Our company offers a comprehensive selection of International Premium Numbers, Inbound SMS Numbers, Hosted Services, Micro Billing Solutions, and Value-Added Services to enhance the profitability of your voice and data applications.',
    },
    {
        id: 3,
        icon: <BsFillGearFill />,
        title: 'Micropayment Solution For Your Business',
        description:
            'Maximize Your Business Earnings with Our IPRN SMS Micropayment Solution. Effortlessly Manage Micro-Transactions for Optimal Profitability. Empower Your Business with the Future of Payments Today',
    },
]

const Feature = () => {
    return (
        <Section id='feature'>
            <h1 className='mb-10 text-center text-[42px] font-medium leading-[52px] text-black-500'>Features</h1>
            {/* <div className='mt-5 flex gap-5 lg:mt-10'> */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {features &&
                    features.map((feature, i) => (
                        <div key={i} className='flex flex-col items-start gap-5 rounded  p-5 shadow-card'>
                            <div className='flex h-[100px] w-[100px] items-center justify-center rounded-full bg-teal-500 text-5xl text-white shadow-md'>
                                {feature.icon}
                            </div>
                            <h3 className='text-3xl font-semibold text-black-500'>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
            </div>
        </Section>
    )
}

export default Feature
