import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import ForMen from './components/ForMen';
import ForWomen from './components/ForWomen';
import Error404 from './components/Error404';
import Shop from './Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Products' element={<Error404/>}/>
          <Route path='/Features' element={<Error404/>}/>
          <Route path='/Blog' element={<Error404/>}/>
          <Route path='/Category/ForMen' element={<ForMen/>}/>
          <Route path='/Category/ForMen/:filter' element={<Error404/>}/>
          <Route path='/Category/ForWomen' element={<ForWomen/>}/>
          <Route path='/Category/ForWomen/:filter' element={<Error404/>}/>
          <Route path='/Product/:idDetailsProduct' element={<ItemDetailsContainer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
