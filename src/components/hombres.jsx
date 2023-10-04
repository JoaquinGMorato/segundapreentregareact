import articulos from "./articulos";

const Hombres = () =>{
    const articulosHombre = articulos.filter(articulos => articulos.categoria === "hombre")
    console.log(articulosHombre)
    return(
<div>
{articulosHombre.map((articulo,index) => (
<div className="card" >
    <div className="card-body">
    <h2 className="card-title">{articulo.nombre}</h2>
<span className="card-text">Precio ${articulo.precio}</span>
</div>
<button class="btn btn-primary">Agregar Al Carrito</button>
</div>  
))}
</div>
    )
};
export default Hombres;