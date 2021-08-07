import React, {useState,useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import {
    Link, useHistory, useParams, useLocation
  } from "react-router-dom";
import JsonFile from './JsonFile.json';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const SearchWithMenu = ({getProductsData}) => {
    const [searchProduct, setsearchProduct] = useState({
      productName:'',
      category:''
    })

    const [productName, setproductName] = useState('');
    const [category, setCategory] = useState('');
    
    const history  = useHistory();
    let { slug } = useParams();
    const location = useLocation();

    const sendProductDataFromChild = (products) => {
      console.log(products)
      getProductsData();
    }

    const getProduct = (event) => {
        const {value} = event.target;
        console.log(value );

        setsearchProduct((prev) => {
          return {
            productName:value,
            category:prev.category
          }
        })

        setproductName(value);
    }

    const getCategory = (event) => {
      const {value} = event.target;
      console.log(value );

      setsearchProduct((prev) => {
        return {
          productName:prev.productName,
          category:value
        }
      })

      setCategory(value);
  }

    const searchItem = (event) => {
        console.log(event, searchProduct);
        
        if(event.key === 'Enter' && event.keyCode === 13 ){
          console.log(history, slug, location);
          const searchParams = `?product=${searchProduct.productName}&category=${searchProduct.category}`;
          history.push(`/productlisting${searchParams}`);

            const headers = {
              'Content-Type': 'application/json',
              'Origin' : 'http://localhost:3000/',
              'Access-Control-Allow-Origin' : '*'
            }
        
        

        Axios.get(`http://ec2-18-219-250-58.us-east-2.compute.amazonaws.com:8000/search/elastic/`,{
          params:{
            product:searchProduct.productName
          }
        },{headers})
         .then((response) => {
               console.log(response.data.Response.products);
               const productsDetails = response.data.Response.products;
               sendProductDataFromChild(productsDetails);
          })
            .catch((err) => {
                console.log(err);
          })
        }
        
    } 

  return(

    
      <InputGroup className="mb-3">
      <select id="userType" name="category" onChange={getCategory}>
      <Link to="/productlisting"> All</Link>
                  <option value="0" defaultValue="0" selected id="myDefault">All</option>
                  <option value="1">Apps</option>
                  <option value="2">Services</option>
                  <option value="3">Products</option>
                  <option value="4">Sellers</option>
                  <option value="5">Web</option>
              </select>
      <FormControl aria-label="Text input with dropdown button" name="productName" placeholder="Search for an App, Product, Seller, or Services"
        aria-label="Username"
        id="search-product"
        onChange={getProduct} onKeyDown={searchItem}/>

      {/* <Button variant="primary" type="button" onClick={searchItem}> Search </Button> */}
      </InputGroup>
  )
};

export default SearchWithMenu;