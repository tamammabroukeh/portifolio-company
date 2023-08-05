import React from "react";
import { Container } from "react-bootstrap";
import FAQ_S from "../../assests/imgs/Rectangle 26.png";
import "./FAQ.css";
export default function FAQ() {
  return (
    <>
      <div className="faq-back">
        <img src={FAQ_S} alt="FAQ" className="" />
      </div>
      <Container>
        <div className="faq">
          <div className="faq-left">
            <h2>Frequently </h2>
            <h2>Asked </h2>
            <h2>Questions</h2>
          </div>
          <div className="faq-right">
            <div>
              <div className="Ques">
                <h2>Question no1</h2>
                <p>Answer no1</p>
              </div>
              <div className="Ques">
                <h2>Question no2</h2>
                <p>Answer no2</p>
              </div>
              <div className="Ques">
                <h2>Question no3</h2>
                <p>Answer no3</p>
              </div>
              <div className="Ques">
                <h2>Question no4</h2>
                <p>Answer no4</p>
              </div>
              <div className="Ques">
                <h2>Question no5</h2>
                <p>Answer no5</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
