import React from "react";
import NavBar from "../Navbar/Navbar";
import "./PaymentWithPaytm.css";
import { Link } from "react-router-dom";
import Paytm from "../../assests/imgs/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1_Paytm.png";
import { Container } from "react-bootstrap";
export default function PaymentWithPaytm() {
  return (
    <>
      <div className="left">
        <img src={Paytm} alt="Paytm" />
      </div>
      <Container>
        <div className="right">
          <h2>Payment with Paytm & UPI</h2>
          <div className="form-paytm">
            <div className="company-number">
              <div>Company number</div>
              <input type="number" placeholder="(225) 555-0118" />
            </div>
            <div className="add-screen">
              <div>Add screenshot</div>
              <input
                type="file"
                accept="Upload file/"
                placeholder="Upload file"
              />
            </div>
          </div>
          <div className="pay-with">
            Or pay with <Link to="/payment">Visa card or Mastercard </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
