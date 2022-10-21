import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'¡Coming Soon!'}/>
      <Footer />
    </div>
  );
}

export default App;
