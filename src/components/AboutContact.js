import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const AboutContact = ({ title, img }) => {
  return (
    <>
      <div className="about_contact_section">
        <Container>
          <Row>
            <Col lg={8} className="ms-auto me-auto">
              <div className="about_contact_content">
                <h1>{title}</h1>
                <img src={img} alt="about_contact_img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutContact;
