import React from "react";
import Header from "../components/Header/Header";
import "./about.scss";
import logo from "../assets/images/products.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about container py-4">
        <h3 className="about-title">About Us</h3>
        <div className="line"></div>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0 text-center">
            <img src={logo} className="img-fluid" alt="png" />
          </div>
          <div className="col-md-6">
            <div className="about-info">
              <h5>Buy without leaving home</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, recusandae dolores magni exercitationem similique
                officia quidem at a, culpa dolor aperiam incidunt explicabo
                necessitatibus magnam deserunt sequi, sed numquam? Laborum
                consequuntur iusto, unde autem harum voluptatum debitis odio ea
                quis beatae totam maxime facilis necessitatibus veritatis
                quibusdam. Corrupti error explicabo ut, porro, deleniti optio
                rem quam id possimus facilis veniam vitae fuga officiis magni
                laboriosam quas doloremque, perferendis itaque! Vitae nostrum
                sapiente dolorum cupiditate, doloribus tempora beatae sed,
                similique tenetur nesciunt vero veritatis, porro deleniti
                repellat? Natus dolorum maiores voluptas, commodi laudantium
                perferendis rem exercitationem, nam quas esse aliquid labore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus asperiores neque mollitia, laboriosam consectetur,
                eligendi sed, quis inventore atque repellat soluta provident
                voluptatem quia minima magni vitae. Expedita architecto ipsa
                laudantium quas assumenda nisi quaerat a voluptatum pariatur
                deserunt necessitatibus, harum nihil blanditiis mollitia sint
                velit. Reprehenderit eaque dolorem libero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
