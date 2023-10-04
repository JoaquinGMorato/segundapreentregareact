import articulos from "./articulos"


const VistaArticulos= () =>{

    return(

<div className="d-flex flex-row flex-wrap gap-3 ">
{articulos.map((articulo,index) => (

<div className="card" >
    <div className="card-body">
    <h3 className="card-title">{articulo.nombre}</h3>
<span className="card-text">Precio ${articulo.precio}</span>

</div>
<button class="btn bg-primary-subtle w-50 p-3">Ver Mas</button>
<button class="btn btn-primary">Agregar Al Carrito</button>
</div>  
))}
</div>
)
};

export default  VistaArticulos;
