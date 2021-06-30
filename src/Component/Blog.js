import React from "react";
import "./CSS/Blog.css";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import Blogdata from "../Data/Blogdata/BlogData";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  return (
    <div className="blog" id="blog">
        <Container>
      <div className="skill-title">
        <Fade top>
          <h2 className="t-color">Blogs</h2>
          <p className="skill-text">Blog helps to clear a concept</p>
        </Fade>
        <Fade left>
          <span className="bottom-line"></span>
        </Fade>
      </div>
      <div className="blog-body">
        {
            Blogdata.map(info=><BlogDetails key={info.id} info={info}/>)
        }

      </div>
      </Container>
    </div>
  );
};

export default Blog;
