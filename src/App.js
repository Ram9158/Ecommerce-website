import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
// import productComponent from './components/productComponent';
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route> 404 Not Found</Route>
        </Switch>




      </Router>

    </div>
  );
}

export default App;
