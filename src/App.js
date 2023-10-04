import './App.css';
import Hombres from './components/hombres';
import Layout from './components/layout';
import Mujer from './components/mujer';
import Niños from './components/niños';
import VistaArticulos from './components/vistaArticulos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
   <Layout>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<VistaArticulos/>}/>
      <Route path="/Hombre" element={<Hombres/>}/>
      <Route path="/Mujer" element={<Mujer/>}/>
      <Route path="/Niños" element={<Niños/>}/>
      <Route path="/carrito" element=""/>
      <Route path="/producto/:articulonombre" element=""/>
    </Routes>
    </BrowserRouter>
   </Layout>
</div>
  );
}

export default App;
