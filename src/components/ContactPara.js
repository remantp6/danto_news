import React from "react";
import AboutContact from "./AboutContact";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const ContactPara = () => {
  return (
    <>
      <div className="contact_para_section">
        <AboutContact
          title="Contact"
          img="https://danto-hugo.netlify.app/images/37.jpg"
        />
        <div className="contact_para_desc">
        <Container>
          <Row>
            <Col lg={8} className="ms-auto me-auto">
              <div className="para-content">
                <p className="my-4">
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Curabitur sodales ligula in libero. Sed dignissim
                  lacinia nunc. Curabitur tortor. Pellentesque nibh.
                </p>
              </div>
            <ContactForm/>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ContactPara;
