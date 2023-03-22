type Props = {
    slider: {
        imgUrl: string
        title: string
        description: string
    }
}

const BannerSlide = ({ slider }: Props) => {
    return (
        <div style={{ background: `url(${slider.imgUrl})`, backgroundSize: 'cover' }}>
            <div className='flex min-h-[700px] items-center justify-center bg-white/30 backdrop-blur'>
                <div className='mx-auto w-[750px] text-center'>
                    <h1 className='mb-5 text-5xl font-bold leading-[58px] text-white'>{slider.title}</h1>
                    <p className='text-lg text-white'>{slider.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BannerSlide
