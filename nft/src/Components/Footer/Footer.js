import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  AiOutlineFacebook,
  AiOutlineFire,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
// import { Link } from "react-router-dom";
const Footer = () => {
  const MY_ACCOUNT = [
    {
      display: "Author Profile",
      url: "/seller-profile",
    },
    {
      display: "Create Item",
      url: "/create",
    },
    {
      display: "Collection",
      url: "/market",
    },
    {
      display: "Edit Profile",
      url: "/edit-profile",
    },
  ];

  const RESUORCES = [
    {
      display: "Help Center",
      url: "#",
    },
    {
      display: "Partner",
      url: "#",
    },
    {
      display: "Community",
      url: "#",
    },
    {
      display: "Activity",
      url: "#",
    },
  ];

  const COMPANY = [
    {
      display: "About",
      url: "#",
    },
    {
      display: "Career",
      url: "#",
    },
    {
      display: "Ranking",
      url: "#",
    },
    {
      display: "Contact Us",
      url: "/contact",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="logo">
              <h2 className="d-flex align-items-center gap-2">
                <AiOutlineFire className="ai-fire" />
                NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi non quis exercitationem{" "}
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>My Account</h5>
            <ListGroup className="list_grup">
              {MY_ACCOUNT.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list_item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Resuorces</h5>
            <ListGroup className="list_grup">
              {RESUORCES.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list_item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            <ListGroup className="list_grup">
              {COMPANY.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list_item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5>NewsLetter</h5>
            <input type="text" className="newsLetter" placeholder="Email" />
            <div className="social_links d-flex gap-5 align-items-center">
              <span>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </span>

              <span>
                <a href="#">
                  <AiOutlineFacebook />
                </a>
              </span>

              <span>
                <a href="#">
                  <AiOutlineYoutube />
                </a>
              </span>

              <span>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
              </span>
            </div>
          </Col>
          <Col lg="12" className="mt-4 text-center">
            <p className="copyRight">
              Copyrights 2023 ,Developed by Venkata Vamsi Enduri @Vamsi's
              eduWorld All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
