
import categorias

from "./categorias"
const Footer =() =>{
    return(
        <footer >
        <ul >   
        {categorias.map ((nombre,index) => (
<li>
   <a href="#">{nombre}</a>
</li>
))}
        </ul>
            
            
        </footer>
    )
}

export default Footer;