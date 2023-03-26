import Meta from '@/components/common/Meta'
import { About, Banner, Contact, Feature, WeOffer } from '@/sections'
import { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>
            <Meta
                title='Welcome to Penstarz'
                description='Penstarz is a telecommunication company'
                keywords='telecommunication'
            />
            <Banner />
            <Feature />
            <WeOffer />
            <About />
            {/* <Login /> */}
            <Contact />
        </Fragment>
    )
}

export default Home
