import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./SendMessage.css";
import SendImage from "../../assests/imgs/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1_Send.png";
import NavBar from "../Navbar/Navbar";
export default function SendMessge() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="send-left">
        <h2>Send message</h2>
        <img src={SendImage} alt="Send Message" />
      </div>
      <div className="send-right">
        <Container>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={enteredName}
              onChange={handleNameChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              value={enteredEmail}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Details"></textarea>
            <button type="submit">Submit</button>
          </form>
        </Container>
      </div>
    </>
  );
}
