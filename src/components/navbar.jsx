import CategoriasNavBar from "./categoriasNavbar";
import Marca from "./marca";
import NavButton from "./navbarbutton";
import Iconocarrito from "./iconocarrito";

const NavBar = () => {

    return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <Marca/>
   <NavButton/>
   <CategoriasNavBar/>
  </div>
  <Iconocarrito/>
</nav>
    )
}

export default NavBar;