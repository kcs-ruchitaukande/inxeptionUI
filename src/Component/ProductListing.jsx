import {useState} from 'react'
import ProductListingElement from './ProductListingElement';
import Button from 'react-bootstrap/Button'
import {
    useHistory, useParams, useLocation
  } from "react-router-dom";
import SearchWithMenu from './SearchBox';


function ProductListing({noOfProduct}) {
    
    const location = useLocation();

    let query = new URLSearchParams(location.search);

    console.log(query.get("product"), query.get("category"))
    console.log(noOfProduct);
    // const [show, setShow] = useState((noOfProduct.length > 4) ? true : false);

    // if(noOfProduct.length > 4){
    //     setShow(true);
    // }

    return (
        <div class="row">
            <div className="col-md-3">

            </div>

            <div className="col-md-9">
            
                <div className="row">
                    <SearchWithMenu/>
                {
                        noOfProduct.map((product, index) => {
                            console.log(index, product);
                           return(
                               (index >= 5) ?
                               <>
                                <div className="col-md-4">
                                    <Button variant="outline-secondary">View All </Button>
                                </div> 
                                </>
                                :
                                <ProductListingElement />
                           ) 
                           
                            
                        })
                }
                    
                </div>
            </div>
        </div>


    )
}

export default ProductListing
