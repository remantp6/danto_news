import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <>
      <div className="home_content">
        <Container>
          <section className="home_content_top">
            <h1 className="text-center mb-0">
              One Stop Daily News, Article, Inspiration, and Tips.
            </h1>
            <p className="text-center">
              Features productivity, tips, inspiration and strategies for
              massive profits. Find out how to set up a successful blog or how
              to make yours even better!
            </p>
          </section>
          <section className="home_content_bottom">
            <Row>
              <Col lg={3}>
                <Row className="d-flex flex-column">
                  <Col>
                    <div className="article">
                      <section className="article_head">
                        <img
                          src="https://danto-hugo.netlify.app/images/19.jpg"
                          alt="article-1"
                          className="w-100"
                          style={{ height: "190px", objectFit: "cover" }}
                        ></img>
                      </section>
                      <section className="article_content">
                        <span className="article_meta d-flex">
                          <section className="article_meta_title">
                            <p className="mb-0">Study</p>
                          </section>
                          <section className="article_meta_date">
                            <p className="mb-0">
                              <span>.</span>18 JAN, 2023
                            </p>
                          </section>
                        </span>
                        <h3>
                          <NavLink to="/banner_content/study"> 
                            What's the Best Way to Discipline My Child?
                          </NavLink>
                          </h3>
                        <span className="article_info">
                          <p>By Livia Philips</p>
                        </span>
                      </section>
                    </div>
                  </Col>
                  <Col>
                    <div className="article">
                      <section className="article_head">
                        <img
                          src="https://danto-hugo.netlify.app/images/05.jpg"
                          alt="article-2"
                          className="w-100"
                          style={{ height: "190px", objectFit: "cover" }}
                        ></img>
                      </section>
                      <section className="article_content">
                        <span className="article_meta d-flex">
                          <section className="article_meta_title">
                            <p className="mb-0">People</p>
                          </section>
                          <section className="article_meta_date">
                            <p className="mb-0">
                              <span>.</span>7 JAN, 2022
                            </p>
                          </section>
                        </span>
                        <h3>
                          <NavLink to="/banner_content/people">
                            10 Key Questions to Ask When Buying a New Car
                          </NavLink>
                        </h3>
                        <span className="article_info">
                          <p>By Kaiya George</p>
                        </span>
                      </section>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <div className="article">
                  <section className="article_head">
                    <img
                      src="https://danto-hugo.netlify.app/images/11.jpg"
                      alt="article-3"
                      className="w-100"
                      style={{ height: "400px", objectFit: "cover" }}
                    ></img>
                  </section>
                  <section className="article_content">
                    <span className="article_meta d-flex">
                      <section className="article_meta_title">
                        <p className="mb-0">News</p>
                      </section>
                      <section className="article_meta_date">
                        <p className="mb-0">
                          <span>.</span>18 Feb, 2023
                        </p>
                      </section>
                    </span>
                    <h2>
                      <NavLink to="/banner_content/news">
                        How to Accurately Measure Your Success as a Person?
                      </NavLink>
                    </h2>
                    <p className="article_desc me-0 pe-0">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Curabitur sodales
                      ligula in libero. Sed dignissim lacinia nunc. Curabitur
                      tortor. Pellentesque nibh. Aenean quam.
                    </p>
                    <span className="article_info">
                      <p>By Justin Kenter</p>
                    </span>
                  </section>
                </div>
              </Col>
              <Col lg={3}>
                <Row className="d-flex flex-column">
                  <Col>
                    <div className="article">
                      <section className="article_head">
                        <img
                          src="https://danto-hugo.netlify.app/images/12.jpg"
                          alt="article-4"
                          className="w-100"
                          style={{ height: "190px", objectFit: "cover" }}
                        ></img>
                      </section>
                      <section className="article_content">
                        <span className="article_meta d-flex">
                          <section className="article_meta_title">
                            <p className="mb-0">Reading</p>
                          </section>
                          <section className="article_meta_date">
                            <p className="mb-0">
                              <span>.</span>22 JAN, 2023
                            </p>
                          </section>
                        </span>
                        <h3>
                          <NavLink to="/banner_content/reading">
                            14 Reasons Why Reading Is Good for Your Health
                          </NavLink>
                        </h3>
                        <span className="article_info">
                          <p>By Kaiya George</p>
                        </span>
                      </section>
                    </div>
                  </Col>
                  <Col>
                    <div className="article">
                      <section className="article_head">
                        <img
                          src="https://danto-hugo.netlify.app/images/14.jpg"
                          alt="article-5"
                          className="w-100"
                          style={{ height: "190px", objectFit: "cover" }}
                        ></img>
                      </section>
                      <section className="article_content">
                        <span className="article_meta d-flex">
                          <section className="article_meta_title">
                            <p className="mb-0">Science</p>
                          </section>
                          <section className="article_meta_date">
                            <p className="mb-0">
                              <span>.</span>18 JAN, 2022
                            </p>
                          </section>
                        </span>
                        <h3>
                          <NavLink to="/banner_content/science">
                            How Much Water Should You Drink Per Day?
                          </NavLink>
                        </h3>
                        <span className="article_info">
                          <p>By Livia Philips</p>
                        </span>
                      </section>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Banner;
