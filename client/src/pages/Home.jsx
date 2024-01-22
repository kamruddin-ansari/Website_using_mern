import React from "react";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="section-hero">
            <div className="container grid grid-two-cols ">
              <div className="hero-content">
                <p>We are the World Best IT Company</p>
                <h1>Welcome to Farhan Technicals</h1>
                <p>
                  Are you ready to take your bussiness to the next level with
                  cutting-edge IT solutions? Look no further! At Farhan
                  Technicals,We specialize in providing innovative IT services
                  and solutions, tailored to meet your unique needs.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">Connect now</button>
                  </a>
                  <a href="/service">
                    <button className="btn secondary-btn">
                      learn more services
                    </button>
                  </a>
                </div>
              </div>
              <div className="hero-images">
                <img
                  src="/img/home.jpg"
                  alt="Visit home page"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* analytics */}
      <Analytics />
      {/* 3rd section */}
      <section>
        <div className="section-hero">
          <div className="container grid grid-two-cols ">
            <div className="hero-images">
              <img
                src="/img/design.jpg"
                alt="Visit home page"
                width="500"
                height="500"
              />
            </div>
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Get Started Today</h1>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Thapa Technical can help your business thrive
                in the digital age.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">
                    learn more services
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
