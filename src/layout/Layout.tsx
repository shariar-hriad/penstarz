import { useRef } from 'react'

import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Topbar from './header/Topbar'

type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const topbarRef = useRef(null)

    return (
        <>
            <Topbar forwardedRef={topbarRef} />
            <Navbar topbarRef={topbarRef} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
