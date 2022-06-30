// import logo from './logo.svg';
import './App.css';
import NavScrollExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

      <header>
        <NavScrollExample />
      </header>
      <ItemListContainer greeting="Entregado" />

    </div>
  );
}

export default App;
