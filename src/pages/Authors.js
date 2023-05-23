import React from "react";
import AuthorComponent from "../components/AuthorComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

const Authors = () => {
  return (
    <>
      <div className="author_page">
        <Container>
          <div className="author_page_top">
            <Header title="Authors" />
          </div>
          <div className="author_page_bottom">
            <Row className="gy-4">
              <Col md={6}>
                <AuthorComponent
                  au_img="https://danto-hugo.netlify.app/images/100.jpg"
                  au_name="Bruno Mason"
                  au_desc="I’m a seasoned veteran of editorial and content management with the skills to make a difference."
                />
              </Col>
              <Col md={6}>
                <AuthorComponent
                  au_img="https://danto-hugo.netlify.app/images/101.jpg"
                  au_name="Justin Kenter"
                  au_desc="I offer English editing and language facilitation services to improve the fluency and impact of written English."
                />
              </Col>
              <Col md={6}>
                <AuthorComponent
                  au_img="https://danto-hugo.netlify.app/images/102.jpg"
                  au_name="Kaiya George"
                  au_desc="I am an award-winning novelist who has published two books with a major New York City publishing house."
                />
              </Col>
              <Col md={6}>
                <AuthorComponent
                  au_img="https://danto-hugo.netlify.app/images/103.jpg"
                  au_name="Livia Philips"
                  au_desc="We live our lives through stories. I enjoy listening to a good story, and I take pride in crafting someone else’s."
                />
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Authors;
