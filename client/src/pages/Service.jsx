import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="conatainer grid grid-three-cols">
          {services.map((curElem, index) => {
            const { provider, price, service, description } = curElem;
            return (
              <div className="card" key={index}>
                <img
                  src="/img/service.png"
                  alt="our services info"
                  width="200"
                />
                <div class="card-content">
                  <div class="detail-item">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <div class="detail-item">
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
