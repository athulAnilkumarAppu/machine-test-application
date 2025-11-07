import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const countries = [
    { name: "Afghanistan", region: "Asia" },
    { name: "Albania", region: "Europe" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
  ];

  return (
    <div className="countries-welcome-page">
      <Container fluid className="countries-container">
        {/* Header */}
        <div className="header-section">
          <div className="countries-label">Countries</div>
          <div className="header-tabs">
            <span className="tab-item active">All</span>
            <span className="tab-item">Asia</span>
            <span className="tab-item">Europe</span>
          </div>
        </div>

        {/* Welcome */}
        <div className="welcome-title">
          <span className="line"></span>
          <span className="title-text">WELCOME</span>
          <span className="line"></span>
        </div>

        {/* Hero Section */}
        <Row className="hero-section gx-4">
          <Col lg={8} md={12}>
            <div className="hero-card large">
              <div className="placeholder">
                <div className="icon-triangle"></div>
                <div className="icon-circles">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <div className="card-controls">
                <button>◀</button>
                <button>●</button>
                <button>▶</button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className="hero-card small">
              <div className="placeholder">
                <div className="icon-triangle"></div>
                <div className="icon-circles">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Country Grid */}
        <Row className="countries-grid">
          {countries.map((country, i) => (
            <Col lg={6} md={6} sm={12} key={i}>
              <div className="country-card">
                <div className="flag-placeholder"></div>
                <div className="country-info">
                  <h3>{country.name}</h3>
                  <p>{country.region}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Load more */}
        <div className="load-more">
          <Button>Load more</Button>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="social">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <p className="brand">ExampleBrand.com</p>
          <p className="copy">Copyright © 2020 Brand. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
};

export default HomePage;
