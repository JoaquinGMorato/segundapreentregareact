
import categorias

from "./categorias"
const Footer =() =>{
    return(
        <footer >
        <ul className="list-group list-group-horizontal" >   
        {categorias.map ((nombre,index) => (
<li className ="list-group-item flex-fill">
   <a href={nombre}>{nombre}</a>
</li>
))}
        </ul>
        </footer>
    )
}

export default Footer;