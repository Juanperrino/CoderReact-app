import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slide from './components/Slide';
// import Service from './components/Service';
import MotherProducts from './components/MotherProducts';
// import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from './components/Cart/Cart';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavScrollExample />
        <Routes>
          {/* <Slide /> */}


          {/* <ItemList /> */}
          {/* <GraphicCard /> */}
          {/* <Service /> */}
          {/* <Route path='/my-app-perrino' element={<MotherProducts />} /> */}
          {/* <ListContainer /> */}
          <Route path='/my-app-perrino' element={<ItemListContainer />} />
          <Route path=':categoryID' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
