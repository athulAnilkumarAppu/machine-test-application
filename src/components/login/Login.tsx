import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  faGoogle,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import illustration from "../../assets/images/illustration.png";
import keyImage from "../../assets/images/key.png";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  getError,
  getPassword,
  getUserName,
  setError,
  setPassword,
  setUserName,
} from "../../slices/login-slice";
import { validatePassword } from "../../utils/util-functions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);
  const password = useAppSelector(getPassword);
  const error = useAppSelector(getError);

  useEffect(() => {
    return () => {
      dispatch(setError(""));
      dispatch(setUserName(""));
      dispatch(setPassword(""));
    };
  }, []);

  const onUserNameChange = (e: any) => {
    dispatch(setUserName(e.target.value));
    dispatch(setError(""));
  };

  const onPasswordChange = (e: any) => {
    dispatch(setPassword(e.target.value));
    dispatch(setError(""));
  };

  const onSignInClick = () => {
    const { isValid, errors } = validatePassword(password);
    if (!isValid && userName === "") {
      dispatch(setError("Please enter a valid username and password"));
    } else if (!isValid) {
      dispatch(
        setError(
          "Password must be minimum 8 characters long  (consist of atleast 1 Capital letter, 1 number & 1 symbol) "
        )
      );
    } else if (userName === "") {
      dispatch(setError("Please enter username"));
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-page">
      <Container fluid className="login-container">
        <Row className="align-items-center">
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
                    value={userName}
                    onChange={(e: any) => onUserNameChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e: any) => onPasswordChange(e)}
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
                  {error !== "" && <label className="error-msg">{error}</label>}
                </div>

                <Button
                  variant="dark"
                  type="button"
                  className="login-btn"
                  onClick={() => onSignInClick()}
                >
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

          <Col md={6} className="login-illustration-section">
            <div className="illustration-wrapper">
              <img src={keyImage} alt="key" className="key-image" />
              <img
                src={illustration}
                alt="Login Illustration"
                className="illustration-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
