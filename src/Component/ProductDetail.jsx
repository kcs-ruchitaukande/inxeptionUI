import React from 'react';
import { useLocation, useParams } from 'react-router';
import forkLiftImage from '../images/forkLift.jpg';
import forklift1Image from '../images/forklift1.jpg';


const ProductDetail = () => {

  const {id} = useParams();
  console.log(id);
    return (
      <div>
  <nav class="n
  avbar navbar-expand-lg navbar-light bg-light"> <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a> </div>
        </li>
        <li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a> </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="btn btn-md btn-danger ml-4 text-light"><i class="fa fa-shopping-cart" aria-hidden="true"></i> CART</a></li>
      </ul>
    </div>
  </nav>

        <div class="container mt-5">
        <div class="row">
          <div class="col-md-12"> Home / Forklifts / Electric Forklifts / 2008Hyster E70Z </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active"> <img class="d-block w-100" src={forkLiftImage} alt="First slide"/> </div>
                <div class="carousel-item"> <img class="d-block w-100" src={forklift1Image} alt="Second slide"/> </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <h2>S50CT2 ICE Cushion Tire Forklift</h2>
              <h5>Sold by John Deere</h5>
            </div>
            <div class="row">
              <h3 class="text-warning"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></h3>
              &nbsp; &nbsp;
              <h7>5432 Reviews</h7>
              <span>write a review</span>  <span>Questions and Answers</span> 
            </div>
            <div class="row">
              <h4><i class="fa fa-dollar" aria-hidden="true"></i> 20000</h4>
              &nbsp; &nbsp;
              <h5><i class="fa fa-dollar"></i><del>25000</del></h5>
              &nbsp; &nbsp;
              <h5 class="text-success">save $5000 (20%)</h5>
            </div>
            
            <div class="row">
              <p>The Hyster reach trucks have the durability, serviceability, ergonomics and performance
                benefits that will meet your operator's needs, help reduce costs and work to drive uptime and productivity.</p>
            </div>
            <div class="row mt-4">
              
              <h6 style={{fontSize: "15px"}}>SHIP IT &nbsp;</h6>
              <div><p>ready to deliver to Zip code  &nbsp;</p> </div> 
              
            </div>
                                      
                   
          </div>
        </div>
      </div>
      <div class="container mt-5 mb-5">
          <div class="row">
              <h2>Ratings & Reviews</h2>
          </div>
          
          <div class="row mt-5 mb-5">
              <div class="media">
        <img class="mr-3" src="11.jpg" alt="Generic placeholder image"/>
        <div class="media-body">
          <h5 class="mt-0">Very nice product. <span class="text-warning"><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span></h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
          </div>
         </div>
         </div>
          
          
      
    )
}

export default ProductDetail
