
import Card from 'react-bootstrap/Card';
import truckImage from '../images/truck_product.jpg';

const ProductListingElement = () => {
    
    return (
        <div class="col-md-4">
            {
                
                <Card className="text-center">
                    <Card.Img variant="top" src={truckImage} />
                    <Card.Body>
                        {/* <Card.Title>Card title</Card.Title> */}
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>

                        <div>
                            <span class = "fa fa-star checked"></span>
                            <span class = "fa fa-star checked"></span>
                            <span class = "fa fa-star checked"></span>
                            <span class = "fa fa-star checked"></span>
                            <span class = "fa fa-star unchecked"></span> <span className="reviewCount"> (5432) </span>
                        </div>

                        <div className="price">
                            <h4>&#8377; 22,000.00 </h4>
                        </div>
                    </Card.Body>
                </Card>
            }
        </div>
    )
}

export default ProductListingElement
