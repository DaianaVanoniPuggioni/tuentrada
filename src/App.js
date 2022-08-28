import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <ItemListContainer greeting="Bienvenidos a TuEntrada.com"/>
      </header>
    </div>
  );
}

export default App;
