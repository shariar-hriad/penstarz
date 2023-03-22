import Link from 'next/link'
import { features } from './Feature'

type Props = {}

const Feature2 = (props: Props) => {
    return (
        <section className='body-font bg-indigo-100 text-gray-600'>
            <div className='container mx-auto px-5 py-24'>
                <div className='mb-20 flex w-full flex-col text-center'>
                    <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-green-500'>Features</h2>
                    <h1 className='text-center text-[42px] font-medium leading-[52px] text-black-500'>
                        Master Cleanse Reliac Heirloom
                    </h1>
                </div>
                <div className='-m-4 flex flex-wrap'>
                    {features &&
                        features.map((feature, i) => (
                            <div className='p-4 md:w-1/3' key={i}>
                                <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                                    <div className='mb-3 flex items-center'>
                                        <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white'>
                                            {feature.icon}
                                        </div>
                                        <h2 className='title-font text-lg font-medium text-black-500'>
                                            {feature.title}
                                        </h2>
                                    </div>
                                    <div className='flex-grow'>
                                        <p className='text-base leading-relaxed'>{feature.description}</p>
                                        <Link href='/' className='mt-3 inline-flex items-center text-green-500'>
                                            Learn More
                                            <svg
                                                fill='none'
                                                stroke='currentColor'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                className='ml-2 h-4 w-4'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M5 12h14M12 5l7 7-7 7'></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Feature2
