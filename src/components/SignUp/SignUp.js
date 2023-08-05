import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import image2 from "../../assests/imgs/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1_New.png";

import "./SignUp.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Repassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [chbox, setChbox] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleChboxChange = (e) => {
    setChbox(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <main className="sec-wel">
        <div className="wel">Welcome</div>
      </main>
      <div className="signup-container">
        <Container>
          <div className="form-Sigup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                type="password"
                placeholder="Re-entered Password"
                value={Repassword}
                onChange={handleRePasswordChange}
              />
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={handlePhoneChange}
              />
              <label>
                <input
                  type="checkbox"
                  value={chbox}
                  onChange={handleChboxChange}
                />
                <span>I agree to the terms.</span>
              </label>
              <button type="submit">Sign Up</button>
              <div className="new-acc">
                Already have account?
                <span>
                  <Link to="/">Log in</Link>
                </span>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
