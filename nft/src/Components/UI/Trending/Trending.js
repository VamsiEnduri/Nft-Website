import React from "react";
import "./Trending.css";
import { Container, Row, Col } from "react-bootstrap";
import { NFT__DATA } from "../../../assets/data/Data";
import NftCard from "../NftCard/NftCard";
const Trending = () => {
  return (
    <section className="trending">
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="trending_title">Trending</h3>
          </Col>

          {NFT__DATA.slice(1, 9).map((item) => {
            return (
              <Col lg="3" md="4" sm="6" className="mt-4 gap-2" key={item.id}>
                <NftCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
