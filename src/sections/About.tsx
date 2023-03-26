const About = () => {
    return (
        <section
            id='about'
            className='relative bg-cover bg-top bg-no-repeat'
            style={{ backgroundImage: `url('./about.jpg')` }}
        >
            <div className='rounded-md bg-white/30 backdrop-blur-md'>
                <div className='container mx-auto flex flex-col px-5 py-20'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
                            <div className='inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-black-400'>
                                <svg
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    className='h-10 w-10'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                                    <circle cx='12' cy='7' r='4'></circle>
                                </svg>
                            </div>
                            <div className='flex flex-col items-center justify-center text-center'>
                                <h2 className='title-font mt-4 text-lg font-medium text-black-900'>Phoebe Caulfield</h2>
                                <div className='mt-2 mb-4 h-1 w-12 rounded bg-indigo-500'></div>
                                <p className='text-base text-black-800'>
                                    Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh
                                    hot chicken gentrify portland.
                                </p>
                            </div>
                        </div>
                        <div className='mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left'>
                            <p className='mb-4 text-lg leading-relaxed text-black-800'>
                                Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday
                                carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub
                                farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft
                                beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland
                                90&apos;s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt
                                butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
                            </p>
                            <a className='inline-flex items-center text-black-700'>
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
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
