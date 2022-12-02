import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Cart/Checkout';
import Cart from './components/Cart/Cart';
import Error404 from './components/GeneralComponents/Error404';
import Footer from './components/GeneralComponents/Footer';
import ForMen from './components/forMen/ForMen';
import ForWomen from './components/forWomen/ForWomen';
import ItemDetailsContainer from './components/Items/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/GeneralComponents/Navbar';
import ContextContainer from './ContextContainer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextContainer>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/Category/:categoryid' element={<ItemListContainer />}/>
              <Route path='/Category/ForMen' element={<ForMen/>}/>
              <Route path='/Category/ForMen/:filter' element={<Error404/>}/>
              <Route path='/Category/ForWomen' element={<ForWomen/>}/>
              <Route path='/Category/ForWomen/:filter' element={<Error404/>}/>
              <Route path='/Item/:idDetailsProduct' element={<ItemDetailsContainer/>}/>
              <Route path='/Cart' element={<Cart/>} />
              <Route path='/Checkout' element={<Checkout/>} />
            </Routes>
            <Footer />
          </ContextContainer>
        </BrowserRouter>
    </div>
  );
}

export default App;
