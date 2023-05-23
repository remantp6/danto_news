import React from "react";
import LatestData from "../JSONData/LatestData";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const LatestComponent = () => {
  const [loadItem, setloadItem] = useState(6);

  const loadMorePosts = () => {
    setloadItem(loadItem + loadItem);
  };
  const sliceData = LatestData.slice(0, loadItem);
  const allItemsDisplayed = sliceData.length === LatestData.length;

  return (
    <>
      <div className="latest_section">
        <Container>
          <div className="latest_section_top">
            <Header title="Latest" />
          </div>
          <div className="latest_section_bottom">
            <Row className="gy-4">
              {sliceData.map((items) => (
                <Col md={6} lg={4} key={items.id}>
                  <div className="article_inner">
                    <div className="article_head">
                      <img src={items.img} alt="image1" className="w-100" />
                    </div>
                    <div className="article_content">
                      <div className="article_meta d-flex my-3">
                        <div className="article_meta_title">
                          <p className="mb-0">{items.title}</p>
                        </div>
                        <div className="article_meta_date">
                          <p className="mb-0">
                            <span>.</span>
                            {items.date}
                          </p>
                        </div>
                      </div>
                      <div className="article_title">
                        <h4>{items.heading}</h4>
                      </div>
                      <div className="article_info">
                        <span>{items.author}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="loadMorePostButton py-5">
            {!allItemsDisplayed && (
              <button onClick={loadMorePosts}>Load more posts</button>
            )}
          </div>
        </Container>
        <Footer/>
      </div>
    </>
  );
};

export default LatestComponent;
