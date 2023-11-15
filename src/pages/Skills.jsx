import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

//components
import SkillsExp from "../components/SkillsComp/SkillsExp";
import FirstRowIcons from "../components/SkillsComp/FirstRowIcons";
import SecondRowIcons from "../components/SkillsComp/SecondRowIcons";
import ThirdRowIcons from "../components/SkillsComp/ThirdRowIcons";

//css
import "../CSS/Skills.css";

import handleViewport from "react-in-viewport";

const SkillsHeaderContainer = (props) => {
  const { inViewport, enterCount, forwardedRef} = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";

  // if (scrollPosition === 800) {
  //     setAllValues({...allValues, journey: "bold"})
  // }

  return (
    <Row
      ref={forwardedRef}
      className={`skills-head d-flex flex-column align-items-center justify-content-center m-0 ${animations}`}
    >
      <Col className="skills-header text-center p-4" xs={12} md={6}>
        About me
      </Col>
      <Col
        className="skills-subtext text-center pt-0 p-4"
        xs={12}
        md={10}
        lg={8}
        xl={8}
        xxl={7}
      >
        My journey began a little over a year ago, after being recommended to
        coding by a high school friend and finding enjoyment in the challenges
        that the web development field presented. After self-teaching for a
        month, I knew coding was what I wanted to pursue. I find something new
        to learn every day, and when I am not on the computer, I enjoy playing
        basketball, cooking, and going on walks to see the neighborhood cats.
      </Col>
    </Row>
  );
};
const SkillsHeaderContainerVP = handleViewport(SkillsHeaderContainer);
const SkillsExpVP = handleViewport(SkillsExp);

const Skills = ({ scrollPosition }) => {
  return (
    <Container
      fluid
      id="skills-section"
      className="skills-section d-flex flex-column justify-content-center pt-5 pb-0 pb-md-3 pb-xl-5 pt-xl-0 pb-xl-0"
    >
      <SkillsHeaderContainerVP scrollPosition={scrollPosition} />
      <Row className="skills-information d-flex justify-content-center">
        <Col
          className=" justify-content-center d-flex flex-column flex-xl-row align-items-center ps-5 pe-5 pb-5 pe-md-0 ps-md-0 pb-md-0 gap-5 gap-xl-5"
          sm={11}
          md={9}
          xxl={9}
        >
          <SkillsExpVP scrollPosition={scrollPosition} />
          <Col
            className=" icons d-flex flex-column justify-content-center align-items-center p-0"
            xs={12}
            md={12}
            lg={10}
            xl={6}
            xxl={6}
          >
            <Col
              className="row-icon-container icons d-flex flex-column justify-content-center"
              xs={12}
              sm={11}
              md={11}
              lg={10}
              xxl={8}
            >
              <FirstRowIcons />
              <SecondRowIcons />
              <ThirdRowIcons />
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

