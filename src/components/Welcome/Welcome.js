import React from "react";
import "./Welcome.css";
import image1 from "../../assests/imgs/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1.png";
import image2 from "../../assests/imgs/Home.png";
import Login from "../Login/Login";
export default function Welcome() {
  return (
    <div className="sec-welcome">
      <div className="bg-ground">
        <div className="text-container">
          <div className="welcome">Welcome</div>
          <div className="form-container">
            <Login />
          </div>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={image1} alt="rowan" className="img-welcome" />
            <img src={image2} alt="rowan" className="img-phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
