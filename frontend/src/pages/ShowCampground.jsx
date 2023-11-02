import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Navbar from "../components/Navbar";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import HoverRating from "../components/HoverRating";
import Spinner from 'react-bootstrap/Spinner';

export default function ShowCampground() {
  const [campground, setCampground] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("loading start");
    axios
      .get(`http://localhost:5555/campgrounds/${id}?_=${Date.now()}`)
      .then((response) => {
        console.log("success");
        setCampground(response.data);
        console.log(response.data.images);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        setLoading(false);
      });
      console.log("loading end");
  }, []);

  return (
    
      <>
<Navbar />
      {loading ? (<Spinner  animation="border" variant="success" />
            ) : (   
      <Container>
        <Row>
          <Col>
            <Card border="0" style={{ textShadow: "none" }}>
                <Carousel>
                 {campground.images.map((img) => (
                   <Carousel.Item>
                      <Image src={img.url} rounded fluid />
                   </Carousel.Item>
                 ))}
               </Carousel> 
               <Card.Body>
                <h5 className="card-title">{campground.title}</h5>
                <p className="card-text">{campground.description}</p>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-muted border-0">
                  {campground.location}
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  ${campground.price} /night
                </ListGroup.Item>
                <ListGroup.Item>
                  Submitted by{" "}
                  {campground.author.username.charAt(0).toUpperCase() +
                    campground.author.username.slice(1)}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button
                  variant="primary"
                  href={`/campgrounds/${campground._id}/edit`}
                >
                  Edit
                </Button>
                <form
                  action={`/campgrounds/${campground._id}?_method=DELETE`}
                  method="POST"
                  className="d-inline offset-1 justify-content-md-end"
                >
                  <Button variant="danger" type="submit">
                    Delete
                  </Button>
                </form>
              </Card.Body>
              <div className="d-grid gap-2 rounded-bottom">
                <Button variant="success" href="/campgrounds">
                  All Campgrounds
                </Button>
              </div>
            </Card>
          </Col> 


          <Col>
          <div id="map"></div>
            <h4>Leave a Review</h4>
            
    
            <Form>
            <HoverRating/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Review</Form.Label>
                <Form.Control type="email" placeholder="Your review" />
              </Form.Group> 
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> 
            {campground.reviews.map((review) => (
            <Card className="mb-2 border-0">
            
      <Card.Body className="mb-1">
        <Card.Text>{review.author.username}</Card.Text>
        <p>
          Rated: {review.rating} stars
        </p>
        <p>{review.body}</p>
        
          <form className="justify-content-md-end" onSubmit={() => handleDelete(review._id)}>
            <Button variant="danger" type="submit" size="sm">
              Delete
            </Button>         
            </form>  
      </Card.Body>
    </Card> ))}
          </Col>

        </Row>
      </Container>  
       )}
       <Footer />
       </>
   
  );
}
