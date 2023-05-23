import React from 'react'
import { useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import ShoppingData from "../JSONData/ShoppingData";

const Shopping = () => {
    const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };
  return (
    <>
       <div className="shopping_section">
        <Container>
          <div className="shopping_section_top d-flex">
            <Header title="Shopping" />
            <button className="ms-auto" onClick={handleViewAllClick}>
              {showAll ? <span>Hide<i className="bi bi-chevron-up"></i></span> : <span>View all<i className="bi bi-chevron-right"></i></span>}
            </button>
          </div>
          <div className="shopping_section_bottom">
            <div>
            <Row>
                {ShoppingData.slice(0, 3).map((elem) => (
                  <Col lg={4} key={elem.id}>
                    <div className="article_inner">
                     <div className="article_head">
                      <img src={elem.img} alt="image1" className="w-100" />
                      </div>
                      <div className="article_content">
                        <div className="article_meta d-flex mt-3 mb-3">
                          <div className="article_meta_title">
                            <p className="mb-0">Shopping</p>
                          </div>
                          <div className="article_meta_date">
                            <p className="mb-0"><span>.</span>{elem.date}</p>
                          </div>
                        </div>
                        <div className="article_title">
                          <h4>{elem.heading}</h4>
                        </div>
                        <div className="article_info">
                          <span>{elem.author}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
                 
                {showAll && (
                  <div>
                  <Row>
                    {ShoppingData.slice(3).map((elem) => (
                      <Col lg={4}>
                      <div className="article_inner">
                     <div className="article_head">
                      <img src={elem.img} alt="image1" className="w-100" />
                      </div>
                      <div className="article_content">
                        <div className="article_meta d-flex mt-3 mb-3">
                          <div className="article_meta_title">
                            <p className="mb-0">Shopping</p>
                          </div>
                          <div className="article_meta_date">
                            <p className="mb-0"><span>.</span>{elem.date}</p>
                          </div>
                        </div>
                        <div className="article_title">
                          <h4>{elem.heading}</h4>
                        </div>
                        <div className="article_info">
                          <span>{elem.author}</span>
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
  )
}

export default Shopping
