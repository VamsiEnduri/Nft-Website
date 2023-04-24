import React from "react";
import "./SellerSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { SELLER__DATA } from "../../../assets/data/Data";
import img from "../../../assets/images/ava-01.png";
const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <div className="seller_section_title">
              <h3>Top Seller</h3>
            </div>
          </Col>

          {SELLER__DATA.map((item) => {
            return (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <div className="single_selection_card d-flex alighn-items-center gap-3">
                  <div className="seller_img">
                    <img src={item.sellerImg} alt="" className="w-100" />
                  </div>
                  <div className="seller_content">
                    <h6>{item.sellerName}</h6>
                    <h6>{item.currentBid}ETH</h6>
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

export default SellerSection;
