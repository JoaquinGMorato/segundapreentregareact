import articulos from "./articulos";

const Niños = () =>{
    const articulosNiños = articulos.filter(articulos => articulos.categoria === "niños")
    console.log(articulosNiños)
    return(
<div>
{articulosNiños.map((articulo,index) => (
<div className="card" >
    <div className="card-body">
    <h2 className="card-title">{articulo.nombre}</h2>
<span className="card-text">Precio ${articulo.precio}</span>
</div>
<button class="btn bg-primary-subtle w-50 p-3">Ver Mas</button>
<button class="btn btn-primary">Agregar Al Carrito</button>
</div>  
))}
</div>
    )
};
export default Niños;