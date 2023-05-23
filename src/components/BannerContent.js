import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const BannerContent = ({
  title,
  heading,
  img,
  author_name,
  author_img,
  date,
}) => {
  return (
    <>
      <div className="banner_content">
        <Container>
          <div className="banner_content_top">
            <span className="article_meta d-flex align-items-center">
              <section className="article_meta_title">
                <p className="mb-0">{title}</p>
              </section>
              <section className="article_meta_date">
                <p className="mb-0">
                  <span>.</span>
                  {date}
                </p>
              </section>
            </span>
            <h1>{heading}</h1>
            <div className="para-content">
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
              nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis
              convallis tristique.
            </p>
            </div>
          </div>
          <div className="banner_content_bottom">
            <Row>
              <Col lg={4}>
                <div className="bottom_left_content">
                  <img src={author_img} alt="k_image" />
                  <div className="post_author_details">
                    <span className="post_author_name">
                      <h4 className="py-3 mb-0">{author_name}</h4>
                    </span>
                    <span className="post_author_desc">
                      <p className="fs-5">
                        I am an award-winning novelist who has published two
                        books with a major New York City publishing house.
                        </p>
                    </span>
                    <span className="post_author_social_media">
                      <NavLink to="https://twitter.com/">
                        <i className="bi bi-twitter"></i>
                      </NavLink>
                      <NavLink to="https://www.facebook.com/">
                        <i className="bi bi-facebook"></i>
                      </NavLink>
                      <NavLink to="https://www.instagram.com/">
                        <i className="bi bi-instagram"></i>
                      </NavLink>
                    </span>
                  </div>
                </div>
              </Col>

              <Col lg={8}>
                <div className="banner_content_bottom_right">
                  <img src={img} alt="k_image" className="w-100" />
                  <div className="para-content">
                  <p className="my-4">
                    Vestibulum lacinia arcu eget nulla. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Curabitur sodales ligula in libero. Sed dignissim
                    lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
                    quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                    convallis tristique sem. Proin ut ligula vel nunc egestas
                    porttitor.
                  </p>
                  </div>
                  <div className="para-content">
                  <p>
                    Morbi lectus risus, iaculis vel, suscipit quis, luctus non,
                    massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
                    ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed,
                    euismod in, nibh. Quisque volutpat condimentum velit. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia,
                    urna non tincidunt mattis, tortor neque adipiscing diam, a
                    cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
                    Suspendisse potenti. Nunc feugiat mi a tellus consequat
                    imperdiet. Vestibulum sapien. Proin quam.
                  </p>
                  </div>
                  <span className="span-content">
                  <p>
                    The longer I live, the more I realize that I am never wrong
                    about anything, and that all the pains I have so humbly
                    taken to verify my notions have only wasted my time!
                    </p>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default BannerContent;
