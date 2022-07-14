import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slide from './components/Slide';
// import Service from './components/Service';
// import MotherProducts from './components/MotherProducts';
// import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavScrollExample />
        <Routes>
          {/* <ItemListContainer greeting="CONTADOR" /> */}
          {/* <Slide /> */}
          {/* <MotherProducts /> */}
          {/* <ItemList /> */}
          {/* <ItemDetailContainer greeting="Best Products" /> */}
          {/* <Route path="/" element={<ItemListContainer greeting={'Desafio Catalogo con MAPS y PROMISES'} />} />
          <Route path="/" element={<ItemDetailContainer greeting={'Detalle del Producto'} />} /> */}
          {/* <GraphicCard /> */}
          {/* <Service /> */}
          {/* <ListContainer /> */}
          <Route path='/' element={<ItemListContainer greeting={"Our Products"} />} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:Motherboardsid' element={<ItemListContainer greeting={"Jackets"} />} />
          <Route path='/category/micros/:idMicros' element={<ItemListContainer greeting={"Mens"} />} />
          <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
          {/* <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
