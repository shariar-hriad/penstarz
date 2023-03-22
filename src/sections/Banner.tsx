import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/navigation'

const sliders = [
    {
        imgUrl: '/background1.jpg',
        title: 'Try our fully automated and customizable IVR panel',
        description:
            'With easy to setup IVR system you get full control and freedom in communication with your customers.',
    },
    {
        imgUrl: '/background2.jpg',
        title: 'Launch Your Own Business by Joining Our Reseller Panel',
        description:
            'Develop your own client base and sell services to them as an independent provider. You will get a full-fledged facility and smartphone-supported Panel to process your assignments on the go.',
    },
    {
        imgUrl: '/background3.jpg',
        title: 'Get Fast and Secure Payments Exactly How You Want Them',
        description:
            'We use only trusted and secure payment methods and provide daily, weekly, biweekly and monthly payment schedules, convenient just for you.',
    },
]

const Banner = () => {
    return (
        <section id='home' className='flex items-center'>
            <Swiper navigation={true} modules={[Navigation]}>
                {sliders &&
                    sliders.map((slider, i) => (
                        <SwiperSlide key={i} style={{ background: `url(${slider.imgUrl})`, backgroundSize: 'cover' }}>
                            <div className='flex min-h-[500px] items-center justify-center bg-black-900/70 px-[15px]'>
                                <div className='mx-auto w-[750px] text-center'>
                                    <h1 className='mb-5 text-3xl font-medium text-white lg:text-5xl lg:leading-[58px]'>
                                        {slider.title}
                                    </h1>
                                    <p className='text-lg text-white'>{slider.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

export default Banner
