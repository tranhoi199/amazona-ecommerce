import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    
    <div className="grid-container">
    <header className="row">
        <div >
            <a className="brand" href="/">Amazona</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen} />
      
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
