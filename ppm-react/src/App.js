import React, { Component } from 'react';
import 'react-router';
import {
  BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';
import ProductHome from './components/ProductHome/ProductHome';
import ProdcutList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';
import EditProduct from './components/EditProduct/EditProduct';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PPM - Project Product Management</h1>
          <BrowserRouter>
          <div className="navbar">
            <ul>
              <li className="navItem"><Link to="/home">Home</Link></li>
              <li className="navItem"><Link to="/products">Product List</Link></li>
              <li className="navItem"><Link to="/products/new">Create Product</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={ProductHome} />
              <Route path="/products/edit/:id" component={EditProduct} />
              <Route path="/products/new" component={CreateProduct} />
              <Route path="/products" component={ProdcutList} />
            </Switch>
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
