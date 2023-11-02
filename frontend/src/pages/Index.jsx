import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Navbar from "../components/Navbar";
import Row from 'react-bootstrap/Row';
import { blue, red } from "@mui/material/colors";
import Footer from "../components/Footer";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'


export default function Index() {
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(() => {
      axios
      .get('http://localhost:5555/campgrounds')
      .then((response) => {
          console.log(response);
          setCampgrounds(response.data.data);
      })
      .catch((error) => {
          // alert("Error");
          console.log(error);

      });
  },[])

  return (
    <>
    <Navbar/>
    <Container fluid="md">
    <div className="mt-2">
      <div className="d-flex justify-content-between mb-2">
        <h1 style={{ display: 'inline' }}>All Camps</h1>
        <Button variant="success" className="text-right">
          <a href="/campgrounds/new" className="text-dark" style={{ textDecoration: 'none' }}>
            Add a campground
          </a>
        </Button>
      </div>

      {campgrounds.map((campground) => (
        <Card key={campground._id} className="mb-3 rounded">
          <Row>
            <div className="col-md-6">
              {campground.images.length ? (
                <img
                  src={campground.images[Math.floor(Math.random() * campground.images.length)].url}
                  alt=""
                  className="img-fluid rounded"
                  crossOrigin="anonymous"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/dt6vwovu0/image/upload/v1687708732/cld-sample-2.jpg"
                  alt="lol no"
                  className="img-fluid"
                  crossOrigin="anonymous"
                />
              )}
            </div>
            <div className="col-md-6">
              <Card.Body style={{ textShadow: 'none' }}>
                <Card.Title>
                  <a href={`/campgrounds/${campground._id}`}>{campground.title}</a>
                </Card.Title>
                <Card.Text>{campground.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{campground.location}</small>
                </Card.Text>
                <Link to={`/campgrounds/details/${campground._id}`} style={{textDecoration:"none"}}>
                <Button variant="primary"> 
                  View {campground.title}
                </Button>
                {/* href={`/campgrounds/details/${campground._id}`} */}
                </Link>
              </Card.Body>
            </div>
          </Row>
        </Card>
      ))}
    </div>
    </Container>
    <Footer />
    </>
  );
}
