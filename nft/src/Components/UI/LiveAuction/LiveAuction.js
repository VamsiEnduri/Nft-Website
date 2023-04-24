import React from "react";
import "./LiveAuction.css";
import { Container, Row, Col } from "react-bootstrap";

import NftCard from "../NftCard/NftCard";
import { NFT__DATA } from "../../../assets/data/Data";
// imp
const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live_auction_top d-flex justify-content-between align-items-center">
              <h3>Live Auction</h3>
              <sapn>
                <a href="/market">Explore More</a>
              </sapn>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item, index) => {
            return (
              <Col lg="3" className="mb-3">
                <NftCard key={index} item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
