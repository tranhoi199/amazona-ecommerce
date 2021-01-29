import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const {cartItems} = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    
    <div className="grid-container">
    <header className="row">
        <div >
            <Link className="brand" to="/">Amazona</Link>
        </div>
        <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
                  </ul>
                </div>
               
              ) : (
                <Link to="/signin">Sign In</Link>
              )
            }
            
        </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}/>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/signin' component={SigninScreen} exact/>
      <Route path='/register' component={RegisterScreen} exact/>
      <Route path="/shipping" component={ShippingAddressScreen}/>
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
