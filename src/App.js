import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slide from './components/Slide';
// import Service from './components/Service';
// import MotherProducts from './components/MotherProducts';
import ItemList from './components/ItemList/ItemList';




function App() {
  return (
    <div className="App">

      <header>
        <NavScrollExample />
      </header>

      <main>
        {/* <ItemListContainer greeting="CONTADOR" /> */}

        {/* <Slide /> */}
        {/* <MotherProducts /> */}
        {/* <ItemList /> */}
        {/* <ItemDetailContainer greeting="Best Products" /> */}
        <ItemListContainer greeting={<h1>Desafio Catalogo con MAPS y PROMISES</h1>} />
        {/* <GraphicCard /> */}
        {/* <Service /> */}
        {/* <ListContainer /> */}






      </main>


      <footer>

      </footer>
    </div>
  );
}

export default App;
