import React from "react";
import Services_Image from "../../assests/imgs/Rectangle 43.png";
import Services_One from "../../assests/imgs/Rectangle 34.png";
import Services_Two from "../../assests/imgs/Rectangle 35.png";
import Services_Three from "../../assests/imgs/Rectangle 36.png";
import Services_Four from "../../assests/imgs/Rectangle 37.png";
import "./Services.css";
export default function Services() {
  return (
    <>
      <div className="services-icon" id="services">
        <div>
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.1166 53.8294H19.3297C16.7622 53.8294 14.6808 55.9108 14.6808 58.4783V58.9677C14.6808 61.5352 16.7622 63.6166 19.3297 63.6166H98.1166C100.684 63.6166 102.765 61.5352 102.765 58.9677V58.4783C102.765 55.9108 100.684 53.8294 98.1166 53.8294Z"
              fill="#372723"
            />
            <path
              d="M98.1166 78.2974H19.3297C16.7622 78.2974 14.6808 80.3788 14.6808 82.9463V83.4357C14.6808 86.0032 16.7622 88.0846 19.3297 88.0846H98.1166C100.684 88.0846 102.765 86.0032 102.765 83.4357V82.9463C102.765 80.3788 100.684 78.2974 98.1166 78.2974Z"
              fill="#372723"
            />
            <path
              d="M98.1166 29.3616H19.3297C16.7622 29.3616 14.6808 31.443 14.6808 34.0105V34.4998C14.6808 37.0674 16.7622 39.1488 19.3297 39.1488H98.1166C100.684 39.1488 102.765 37.0674 102.765 34.4998V34.0105C102.765 31.443 100.684 29.3616 98.1166 29.3616Z"
              fill="#372723"
            />
          </svg>
          <span>Our Services</span>
        </div>
      </div>
      <div className="services text-center">
        <img src={Services_Image} alt="Back_Services" />
        {/* 1 */}
        <div className="service ">
          <div class="row">
            <p class="col">Airplane ticket</p>
            <div class="col">
              <svg
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.3464 53.8296H24.4679C21.7765 53.8296 19.5743 56.0318 19.5743 58.7232C19.5743 61.4147 21.7765 63.6168 24.4679 63.6168H78.3464V72.3764C78.3464 74.5785 80.989 75.6551 82.506 74.0891L96.1102 60.436C97.0399 59.4573 97.0399 57.9403 96.1102 56.9615L82.506 43.3084C80.989 41.7425 78.3464 42.868 78.3464 45.0212V53.8296Z"
                  fill="#372723"
                />
              </svg>
            </div>
            <div class="col">
              <img src={Services_One} alt="Service_One" />
            </div>
          </div>
          {/* 2 */}
          <div class="row">
            <div class="col">
              <img src={Services_Two} alt="Service_One" />
            </div>
            <div class="col">
              <svg
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.0999 63.6167L92.9784 63.6167C95.6698 63.6167 97.8719 61.4146 97.8719 58.7231C97.8719 56.0316 95.6698 53.8295 92.9784 53.8295L39.0999 53.8295L39.0999 45.07C39.0999 42.8679 36.4573 41.7913 34.9403 43.3572L21.3361 57.0104C20.4064 57.9891 20.4064 59.5061 21.3361 60.4848L34.9403 74.1379C36.4573 75.7039 39.0999 74.5784 39.0999 72.4252L39.0999 63.6167Z"
                  fill="#372723"
                />
              </svg>
            </div>
            <p class="col">Hotel reservation</p>
          </div>
          {/* 3 */}
          <div class="row">
            <p class="col">Visa exportation</p>
            <div class="col">
              <svg
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.3464 53.8296H24.4679C21.7765 53.8296 19.5743 56.0318 19.5743 58.7232C19.5743 61.4147 21.7765 63.6168 24.4679 63.6168H78.3464V72.3764C78.3464 74.5785 80.989 75.6551 82.506 74.0891L96.1102 60.436C97.0399 59.4573 97.0399 57.9403 96.1102 56.9615L82.506 43.3084C80.989 41.7425 78.3464 42.868 78.3464 45.0212V53.8296Z"
                  fill="#372723"
                />
              </svg>
            </div>
            <div class="col">
              <img src={Services_Three} alt="Service_One" />
            </div>
          </div>
          {/* 4 */}
          <div class="row">
            <div class="col">
              <img src={Services_Four} alt="Service_One" />
            </div>
            <div class="col">
              <svg
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.0999 63.6167L92.9784 63.6167C95.6698 63.6167 97.8719 61.4146 97.8719 58.7231C97.8719 56.0316 95.6698 53.8295 92.9784 53.8295L39.0999 53.8295L39.0999 45.07C39.0999 42.8679 36.4573 41.7913 34.9403 43.3572L21.3361 57.0104C20.4064 57.9891 20.4064 59.5061 21.3361 60.4848L34.9403 74.1379C36.4573 75.7039 39.0999 74.5784 39.0999 72.4252L39.0999 63.6167Z"
                  fill="#372723"
                />
              </svg>
            </div>
            <p class="col">Tourism trips</p>
          </div>
        </div>
        {/*      
        <div className="service">
          <p></p>
        </div>
        <div className="service">
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M78.3464 53.8296H24.4679C21.7765 53.8296 19.5743 56.0318 19.5743 58.7232C19.5743 61.4147 21.7765 63.6168 24.4679 63.6168H78.3464V72.3764C78.3464 74.5785 80.989 75.6551 82.506 74.0891L96.1102 60.436C97.0399 59.4573 97.0399 57.9403 96.1102 56.9615L82.506 43.3084C80.989 41.7425 78.3464 42.868 78.3464 45.0212V53.8296Z"
              fill="#372723"
            />
          </svg>
          <img src={Services_Two} alt="Service_One" />
        </div>
        <div className="service">
          <p>Airplane ticket</p>
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M78.3464 53.8296H24.4679C21.7765 53.8296 19.5743 56.0318 19.5743 58.7232C19.5743 61.4147 21.7765 63.6168 24.4679 63.6168H78.3464V72.3764C78.3464 74.5785 80.989 75.6551 82.506 74.0891L96.1102 60.436C97.0399 59.4573 97.0399 57.9403 96.1102 56.9615L82.506 43.3084C80.989 41.7425 78.3464 42.868 78.3464 45.0212V53.8296Z"
              fill="#372723"
            />
          </svg>
          <img src={Services_Three} alt="Service_One" />
          <p>Hotel reservation</p>
        </div>
        <div className="service">
          <p>Airplane ticket</p>
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M78.3464 53.8296H24.4679C21.7765 53.8296 19.5743 56.0318 19.5743 58.7232C19.5743 61.4147 21.7765 63.6168 24.4679 63.6168H78.3464V72.3764C78.3464 74.5785 80.989 75.6551 82.506 74.0891L96.1102 60.436C97.0399 59.4573 97.0399 57.9403 96.1102 56.9615L82.506 43.3084C80.989 41.7425 78.3464 42.868 78.3464 45.0212V53.8296Z"
              fill="#372723"
            />
          </svg>
          <img src={Services_Four} alt="Service_One" />
        </div>
        */}
      </div>
    </>
  );
}
