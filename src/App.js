// import logo from './logo.svg';
import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/Slide';
import GraphicCard from './components/GraphicCard';
import Service from './components/Service';
import MotherProducts from './components/MotherProducts';
import ListContainer from './components/ListContainer';
import ItemList from './components/ItemList';



function App() {
  return (
    <div className="App">

      <header>
        <NavScrollExample />
      </header>

      <main>
        {/* <ItemListContainer greeting="CONTADOR" /> */}

        <Slide />
        <MotherProducts />
        {/* <ItemList /> */}
        <ItemListContainer />
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
