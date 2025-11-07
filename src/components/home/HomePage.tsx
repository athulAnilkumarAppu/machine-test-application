import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  getContinentList,
  getIsMenuOpen,
  getVisibleCount,
  setContinentList,
  setCurrentIndex,
  setIsMenuOpen,
  setVisibleCount,
} from "../../slices/home-page-slice";
import { getContinentData } from "../../libs/services/homePageServices";
import ImageSlider from "./ImageSlider";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(getContinentList);
  const visibleCount = useAppSelector(getVisibleCount);
  const menuOpen = useAppSelector(getIsMenuOpen);

  useEffect(() => {
    getContinentDataCall();

    return () => {
      dispatch(setVisibleCount(10));
      dispatch(setCurrentIndex(0));
    };
  }, []);

  const getContinentDataCall = async () => {
    await getContinentData()
      .then((res: any) => {
        if (res) {
          dispatch(setContinentList(res));
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const visibleCountries = countries.slice(0, visibleCount);

  const handleLoadMore = () => {
    dispatch(setVisibleCount(visibleCount + 10));
  };

  const onHamburgerClick = () => {
    dispatch(setIsMenuOpen(!menuOpen));
  };

  return (
    <div className="countries-welcome-page">
      <Container fluid className="countries-container">
        <div className="header-section">
          <div className="countries-label">Countries</div>

          <div className="header-tabs">
            <span className="tab-item active">All</span>
            <span className="tab-item">Asia</span>
            <span className="tab-item">Europe</span>
          </div>

          <div className="hamburger" onClick={() => onHamburgerClick()}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <span className="tab-item active">All</span>
              <span className="tab-item">Asia</span>
              <span className="tab-item">Europe</span>
            </div>
          )}
        </div>

        <div className="welcome-title">
          <span className="line"></span>
          <span className="title-text">WELCOME</span>
          <span className="line"></span>
        </div>

        <Row className="hero-section gx-4">
          <Col lg={8} md={12}>
            <ImageSlider />
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

        <Row className="countries-grid">
          {visibleCountries.map((country: any, i: number) => (
            <Col lg={6} md={6} sm={12} key={i}>
              <div className="country-card">
                <div className="flag-placeholder">
                  <img src={country.flag} alt="flag" />
                </div>
                <div className="country-info">
                  <h3>{country.name}</h3>
                  <p>{country.region}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {visibleCount < countries.length && (
          <div className="load-more">
            <Button onClick={handleLoadMore}>Load more</Button>
          </div>
        )}

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
