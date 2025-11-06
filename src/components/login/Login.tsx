import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.scss";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import illustration from "./assets/login-illustration.svg"; // replace with your illustration

const Login = () => {
  return (
    <div className="login-page">
      <Container fluid className="login-container">
        <Row className="align-items-center">
          {/* Left side - Form */}
          <Col md={6} className="login-form-section">
            <div className="login-form-box">
              <h2 className="login-title">Sign In</h2>
              <p className="login-subtitle">
                New user? <a href="#">Create an account</a>
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Username or email"
                    className="login-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                    <FaGoogle />
                  </a>
                  <a href="#" className="social-icon">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social-icon">
                    <FaTwitter />
                  </a>
                </div>
              </Form>
            </div>
          </Col>

          {/* Right side - Illustration */}
          <Col md={6} className="login-illustration-section d-none d-md-flex">
            <img src={illustration} alt="Login Illustration" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
