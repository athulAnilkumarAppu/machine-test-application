import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import illustration from "./assets/login-illustration.svg";

const Login = () => {
  return (
    <div className="login-page">
      <Container fluid className="login-container">
        <Row className="align-items-center">
          {/* Left side - form */}
          <Col md={6} className="login-form-section">
            <div className="login-form-box">
              <h2 className="login-title">Sign In</h2>
              <p className="login-subtitle">
                New user? <a href="#">Create an account</a>
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Username or email"
                    className="login-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="login-input"
                  />
                </Form.Group>

                <div className="d-flex align-items-center mb-3">
                  <Form.Check
                    type="checkbox"
                    id="keepSignedIn"
                    className="login-checkbox"
                  />
                  <label
                    htmlFor="keepSignedIn"
                    className="login-checkbox-label"
                  >
                    Keep me signed in
                  </label>
                </div>

                <Button variant="dark" type="submit" className="login-btn">
                  Sign In
                </Button>

                <div className="divider">
                  <span>Or Sign In With</span>
                </div>

                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </Form>
            </div>
          </Col>

          {/* Right side - illustration */}
          <Col md={6} className="login-illustration-section d-none d-md-flex">
            {/* Replace this with your actual image */}
            <img src="your-image-path.svg" alt="Login Illustration" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
