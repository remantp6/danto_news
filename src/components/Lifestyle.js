import React from "react";
import { useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import LifestyleData from "../JSONData/LifestyleData";

const Lifestyle = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div className="lifestyle_section">
        <Container>
          <div className="lifestyle_section_top d-flex">
            <Header title="Lifestyle" />
            <button className="ms-auto" onClick={handleViewAllClick}>
              {showAll ? <span>Hide<i className="bi bi-chevron-up"></i></span> : <span>View all<i className="bi bi-chevron-right"></i></span>}
            </button>
          </div>
          <div className="lifestyle_section_bottom">
          <div>  
            <Row>
                {LifestyleData.slice(0, 3).map((data) => (
                  <Col lg={4} key={data.id}>
                    <div className="article_inner">
                     <div className="article_head">
                      <img src={data.img} alt="image1" className="w-100" />
                      </div>
                      <div className="article_content">
                        <div className="article_meta d-flex mt-3 mb-3">
                          <div className="article_meta_title">
                            <p className="mb-0">Lifestyle</p>
                          </div>
                          <div className="article_meta_date">
                            <p className="mb-0"><span>.</span>{data.date}</p>
                          </div>
                        </div>
                        <div className="article_title">
                          <h4>{data.heading}</h4>
                        </div>
                        <div className="article_info">
                          <span>{data.author}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
                 
                {showAll && (
                  <div>
                  <Row>
                    {LifestyleData.slice(3).map((data) => (
                      <Col lg={4}>
                      <div className="article_inner">
                     <div className="article_head">
                      <img src={data.img} alt="image1" className="w-100" />
                      </div>
                      <div className="article_content">
                        <div className="article_meta d-flex mt-3 mb-3">
                          <div className="article_meta_title">
                            <p className="mb-0">Lifestyle</p>
                          </div>
                          <div className="article_meta_date">
                            <p className="mb-0"><span>.</span>{data.date}</p>
                          </div>
                        </div>
                        <div className="article_title">
                          <h4>{data.heading}</h4>
                        </div>
                        <div className="article_info">
                          <span>{data.author}</span>
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

export default Lifestyle;
