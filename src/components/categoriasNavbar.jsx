import categorias from "./categorias"

const CategoriasNavBar = ()=>{

    return(
            
 <div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
    {categorias.map ((nombre,index) => (
   <li className="nav-item">
     <a className="nav-link active" aria-current="page" href="#">{nombre}</a>
   </li>))}
 </ul>
</div>
          );
        }
export default CategoriasNavBar;
