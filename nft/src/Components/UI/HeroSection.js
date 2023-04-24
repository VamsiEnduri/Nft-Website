import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsRocket } from "react-icons/bs";
import { RiBallPenFill } from "react-icons/ri";
import heroImg from "../../assets/images/hero.jpg";
const HeroSection = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2>
                Discover rare digital art and collect&nbsp;
                <span>sell extrodinary</span>
              </h2>

              <span>NFTs</span>

              <p>"Lorem sit amet, consectetur adipiscing elit, sed do</p>
              <div className="hero_btns d-flex align-items-center gap-4">
                <button className="explore-btn d-flex align-items-center  gap-2">
                  <BsRocket className="btn-icon" />
                  <a href="/market">Explore</a>
                </button>
                <button className="create-btn d-flex align-items-center  gap-2">
                  <RiBallPenFill className="btn-icon" />
                  <a href="/create">Create</a>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
