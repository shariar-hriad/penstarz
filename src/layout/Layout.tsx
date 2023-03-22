import Footer from './footer/Footer'
import Navbar from './header/Navbar'
import Topbar from './header/Topbar'

type Props = {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Topbar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
