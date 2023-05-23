import React from "react";
import AboutContact from "./AboutContact";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const AboutPara = () => {
  return (
    <>
      <div className="about_para_section">
      <AboutContact
        title="About"
        img="https://danto-hugo.netlify.app/images/31.jpg"
      />
      <div className="about_para_desc">
      <Container>
      <Row>
        <Col lg={8} className="ms-auto me-auto">
        <div className="para-content">
          <p className="my-4">
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor.
          </p>
        </div>
        <div className="para-content">
          <p>
            Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
            metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
            ante. Sed lacinia, urna non tincidunt mattis, tortor neque
            adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
            fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
            imperdiet. Vestibulum sapien. Proin quam.
          </p>
        </div>
        <span className="span-content">
          <p>
            The longer I live, the more I realize that I am never wrong about
            anything, and that all the pains I have so humbly taken to verify my
            notions have only wasted my time!
          </p>
        </span>
        </Col>
      </Row>
        </Container>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AboutPara;
