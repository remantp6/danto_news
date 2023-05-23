import React from "react";
import { useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import FoodData from "../JSONData/FoodData";

const Food = () => {
  const [showAll, setShowAll] = useState(false);
  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div className="food_section">
        <Container>
          <div className="food_section_top d-flex">
            <Header title="Food" />
            <button className="ms-auto" onClick={handleViewAllClick}>
              {showAll ? (
                <span>
                  Hide<i className="bi bi-chevron-up"></i>
                </span>
              ) : (
                <span>
                  View all<i className="bi bi-chevron-right"></i>
                </span>
              )}
            </button>
          </div>
          <div className="food_section_bottom">
            <div>
              <Row>
                {FoodData.slice(0, 3).map((dataItem) => (
                  <Col lg={4} key={dataItem.id}>
                    <div className="article_inner">
                      <div className="article_head">
                        <img src={dataItem.img} alt="image1" className="w-100" />
                      </div>
                      <div className="article_content">
                        <div className="article_meta d-flex mt-3 mb-3">
                          <div className="article_meta_title">
                            <p className="mb-0">Food</p>
                          </div>
                          <div className="article_meta_date">
                            <p className="mb-0">
                              <span>.</span>
                              {dataItem.date}
                            </p>
                          </div>
                        </div>
                        <div className="article_title">
                          <h4>{dataItem.heading}</h4>
                        </div>
                        <div className="article_info">
                          <span>{dataItem.author}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}

                {showAll && (
                  <div>
                    <Row>
                      {FoodData.slice(3).map((dataItem) => (
                        <Col lg={4}>
                          <div className="article_inner">
                            <div className="article_head">
                              <img
                                src={dataItem.img}
                                alt="image1"
                                className="w-100"
                              />
                            </div>
                            <div className="article_content">
                              <div className="article_meta d-flex mt-3 mb-3">
                                <div className="article_meta_title">
                                  <p className="mb-0">Food</p>
                                </div>
                                <div className="article_meta_date">
                                  <p className="mb-0">
                                    <span>.</span>
                                    {dataItem.date}
                                  </p>
                                </div>
                              </div>
                              <div className="article_title">
                                <h4>{dataItem.heading}</h4>
                              </div>
                              <div className="article_info">
                                <span>{dataItem.author}</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Food;
