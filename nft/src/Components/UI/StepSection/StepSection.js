import React from "react";
import "./StepSection.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  RiImageLine,
  RiLayoutMasonryLine,
  RiListCheck,
  RiWalletLine,
} from "react-icons/ri";
const StepSection = () => {
  const STEP_DATA = [
    {
      title: "SetUp Your Wallet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ua",
      icon: <RiWalletLine />,
    },

    {
      title: "Create Your Collection",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed qua",
      icon: <RiLayoutMasonryLine />,
    },

    {
      title: "Add your NFTs",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ua",
      icon: <RiImageLine />,
    },

    {
      title: "List Them For Sale",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ea",
      icon: <RiListCheck />,
    },
  ];
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step_title">Create and Sell Your NFTs</h3>
          </Col>

          {STEP_DATA.map((item, index) => {
            return (
              <Col lg="3" md="4" sm="6" key={index}>
                <div className="single_step_item">
                  <span> {item.icon}</span>
                  <div className="step_item_content">
                    <h5>
                      <a href="/wallet">{item.title}</a>
                    </h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
