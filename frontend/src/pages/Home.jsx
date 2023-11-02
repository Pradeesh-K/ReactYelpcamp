import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { blue, red } from "@mui/material/colors";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom'
import "./Home.css";
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [message, setMessage] = useState("Empty");

  // useEffect(() => {
  //     axios
  //     .get('http://localhost:5555/')
  //     .then((response) => {
  //         console.log(response);
  //         setMessage(response.data);
  //     })
  //     .catch((error) => {
  //         // alert("Error");
  //         console.log(error);

  //     });
  // },[])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>YelpCamp</h1>
        <p className="lead">
          Welcome to YelpCamp! <br /> Jump right in and explore our many
          campgrounds. <br />
          Feel free to share some of your own and comment on others!
        </p>
        {/* <Button variant="outline-secondary">fbdgb</Button> */}
        <a
          href="/campgrounds"
          className="btn btn-lg btn-secondary font-weight-bold text-white"
        >
          View Campgrounds
        </a>

      </main>
      <Footer />
    </div>
  );
}
