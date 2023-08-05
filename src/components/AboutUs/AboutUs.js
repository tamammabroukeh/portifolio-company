import React from "react";
import "./AboutUs.css";
import Rectangle from "../../assests/imgs/Rectangle 24.png";
import NavBar from "../Navbar/Navbar";
import { Container } from "react-bootstrap";
import Services from "../Services/Services";
import FAQ from "../FAQ`S/FAQ";
import Footer from "../Footer/Footer";
export default function AboutUs() {
  return (
    <>
      <div className="back">
        <img src={Rectangle} className="back" alt="AboutUs" />
      </div>
      <Container>
        <div className="about-left">
          <h2>About Us</h2>
        </div>
        <div className="about-right">
          <div>A brief about the company</div>
        </div>
      </Container>
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}
