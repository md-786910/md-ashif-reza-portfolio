import Footer from "./footer/Footer"
import Header from "./header/Header"

function Layouts({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )


}

export default Layouts
