import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

let userSubscribe = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
const Footer = () => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: userSubscribe,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.backgroundColor === (isDarkMode && "black")
      ? (document.body.style.color = "white")
      : (document.body.style.color = "black");
  }, [isDarkMode]);

  return (
    <>
      <div className="footer_section">
        <Container>
          <div className="footer_inner">
            <div className="footer_section_top">
              <NavLink to="/">
                <img
                  src="https://danto-hugo.netlify.app//images/logo.svg"
                  alt="Danto logo"
                />
              </NavLink>
              <p className="mb-0">
                Features productivity, tips, inspiration and strategies for
                massive profits. Find out how to set up a successful blog or how
                to make yours even better!
              </p>
              <div className="footer__social_media_icons">
                <NavLink to="https://twitter.com/">
                  <i className="bi bi-twitter"></i>
                </NavLink>
                <NavLink to="https://www.facebook.com/">
                  <i className="bi bi-facebook"></i>
                </NavLink>
                <NavLink to="https://www.pinterest.com/">
                  <i className="bi bi-pinterest"></i>
                </NavLink>
                <NavLink to="https://www.instagram.com/">
                  <i className="bi bi-instagram"></i>
                </NavLink>
              </div>
            </div>
            <div className="footer_section_mid">
              <Row>
                <Col lg={6}>
                  <div className="footer_section_mid_left">
                    <h2>Recent posts</h2>
                    <div className="article d-flex">
                      <section className="article_head pb-4">
                        <img
                          src="https://danto-hugo.netlify.app/images/19.jpg"
                          alt="article-1"
                          style={{
                            height: "140px",
                            width: "200px",
                            objectFit: "cover",
                          }}
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
                        <h5>
                          <NavLink to="/banner_content/study">
                            What's the Best Way to Discipline My Child?
                          </NavLink>
                        </h5>
                        <span className="article_info">
                          <p>By Livia Philips</p>
                        </span>
                      </section>
                    </div>
                    <div className="article d-flex">
                      <section className="article_head pb-4">
                        <img
                          src="https://danto-hugo.netlify.app/images/12.jpg"
                          alt="article-1"
                          style={{
                            height: "140px",
                            width: "200px",
                            objectFit: "cover",
                          }}
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
                        <h5>
                          <NavLink to="/banner_content/science">
                            How Much Water Should You Drink Per Day?
                          </NavLink>
                        </h5>
                        <span className="article_info">
                          <p>By Livia Philips</p>
                        </span>
                      </section>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="footer_section_mid_right">
                    <h2 className="mb-0">Get interesting news</h2>
                    <p>
                      Subscribe to our newsletter and we’ll send you the emails
                      of latest posts.
                    </p>
                    <form onSubmit={handleSubmit} className="d-flex">
                      <div className="input_field">
                        <input
                          type="email"
                          autoComplete="off"
                          name="email"
                          placeholder="Your Email Address"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (
                          <p className="form_error ps-3 pt-1 mb-0">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="button_label">
                        <button type="submit" className="my-0">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer_section_bottom d-flex justify-content-between">
            <div className="copyright">
              <p className="mb-0">
                2023 © Danto. All Right Reserved. Published with Hugo.
              </p>
            </div>
            <div className="footer_section_bottom_right d-flex pb-0">
              <div className="toggle_theme">
                <button onClick={toggleDarkMode} className="pe-4">
                  {isDarkMode ? (
                    <i className="bi bi-brightness-high fs-5">
                      <span className="fs-5 ps-2">Light</span>
                    </i>
                  ) : (
                    <i className="bi bi-moon-fill fs-5">
                      <span className="fs-5 ps-2">Dark</span>
                    </i>
                  )}
                </button>
              </div>
              <div className="scroll_top">
                <a href="#root">
                  <i className="bi bi-arrow-up fs-5">
                    <span className="fs-5 ps-2">Back To Top</span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
