import CategoriasNavBar from "./categoriasNavbar";
import Marca from "./marca";
import NavButton from "./navbarbutton";
import Iconocarrito from "./cart4";

const NavBar = () => {

    return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <Marca/>
   <NavButton/>
   <CategoriasNavBar/>
  </div>
  <a href="#">{Iconocarrito}</a>
</nav>
    )
}

export default NavBar;