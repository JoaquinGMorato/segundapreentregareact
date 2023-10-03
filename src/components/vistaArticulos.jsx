import articulos from "./articulos"


const VistaArticulos= () =>{

    return(

<div className="d-flex flex-row flex-wrap">
{articulos.map((articulo,index) => (

<div className="card " >
    <div className="card-body">
    <h2 className="card-title">{articulo.nombre}</h2>
<span className="card-text">Precio ${articulo.precio}</span>
</div>
</div>  
))}
</div>
)
};

export default  VistaArticulos;
