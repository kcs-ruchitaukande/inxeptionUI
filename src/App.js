import React, {useState, useEffect} from 'react';
import SearchBar from './Component/SearchBar';
import Header from './Component/Header';
import SearchWithMenu from './Component/SearchBox';
import ProductDetail from './Component/ProductDetail';
import {
  
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";
import ProductData from './Data';

// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import ProductListing from './Component/ProductListing';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

// const getProductsData = () => {
//   setstate()
// }

const App = () => {
  const [state, setstate] = useState([]);

  function getProductsData(childData){
    console.log(childData);
    setstate(childData);// this data must be in array
  }
  // useEffect(() => {
   
   
  // });
  return (
    <React.Fragment>
      <Header />
        {/* <Navbar> */}
          <Container>
      <Switch>
         
          
          <Route exact path="/productlisting">
            <ProductListing noOfProduct={state}/>
          </Route>
          <Route exact path="/">
          <div class="card-container">
            <SearchWithMenu parentGetProductData={ getProductsData} />
          </div>  
          </Route>

          <Route exact path="/productlisting/:id">
            <ProductDetail/>
          </Route>

          <Redirect to='/' />
        </Switch>
        </Container>
        {/* </Navbar> */}
     
    {/* <div class="container">
        <SearchBar/>
      </div> */}
      
      
      </React.Fragment>
    
  );
};
export default App;
