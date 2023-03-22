import Meta from '@/components/common/Meta'
import { About, Banner, Feature, Login, WeOffer } from '@/sections'
import Banner2 from '@/sections/Banner2'
import Feature2 from '@/sections/Feature2'
import Priceing from '@/sections/Priceing'

export default function Home() {
    return (
        <>
            <Meta
                title='Welcome to Penstarz'
                description='Penstarz is a telecommunication company'
                keywords='telecommunication'
            />
            <Banner />
            <Banner2 />
            <Feature />
            <Feature2 />
            <About />
            <WeOffer />
            <Priceing />
            <Login />
        </>
    )
}
