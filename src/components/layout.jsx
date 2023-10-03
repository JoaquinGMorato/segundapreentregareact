import Footer from "./footer"
import NavBar from "./navbar"



const Layout= ({children})=>{
    return(

<div>
    <NavBar/>
<div>{children}</div>
    <Footer/>
</div>

    )
}

export default Layout;