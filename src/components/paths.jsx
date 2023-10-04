import categorias from "./categorias";
import {Route} from 'react-dom';


const Paths = () =>{
    return(
<div>
{categorias.map ((nombre,index) => (

<Route path={categorias.path} element=""/>

))}
</div>
    )}


export default Paths;