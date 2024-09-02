import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiGithub,
} from "react-icons/di";
import {
  SiNextdotjs,
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">     
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">     
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">     
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> 
        <DiReact />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col><Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>

    </Row>
  );
}

export default Techstack;
