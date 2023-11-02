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

export default function NewCampground() {
  const [campground, setCampground] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);



  return (
    
      <>
      <h1>dgr</h1>
</>
   
  );
}
