// import logo from './logo.svg';
import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './components/Slide';



function App() {
  return (
    <div className="App">

      <header>
        <NavScrollExample />
      </header>

      <main>
        <ItemListContainer greeting="CONTADOR" />

        {/* <Slide /> */}






      </main>


      <footer>

      </footer>
    </div>
  );
}

export default App;
