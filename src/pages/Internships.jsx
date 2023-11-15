import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/Internships.css";
import handleViewport from "react-in-viewport";

const InternshipContainer = (props) => {
  const { inViewport, enterCount, forwardedRef } = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";

  return (
    <>
      <Row
        ref={forwardedRef}
        className={`internships-header text-center p-4  d-flex justify-content-center ${animations}`}
        xs={12}
        md={6}
      >
        Internships
      </Row>
      <Row
        className={`internship-logo-row d-flex justify-content-center gap-4 gap-md-2 p-2 ${animations}`}
      >
        <Col xs={11} sm={8} md={5} lg={4} xl={3}>
          <a
            className="internship-image-container"
            target="_blank"
            href="https://www.killthatnoise.com"
          >
            <Image
              src="/images/ktn-logo.png"
              class="img-fluid"
              id="ktn-logo"
            ></Image>
          </a>
        </Col>
        <Col xs={11} sm={8} md={5} lg={4} xl={3}>
          <a
            href="https://bazar-app.com/"
            target="_blank"
            className="internship-image-container"
          >
            <Image
              src="/images/favicondark.png"
              class="img-fluid rounded"
            ></Image>
          </a>
        </Col>
      </Row>
    </>
  );
};

const InternshipContainerVP = handleViewport(InternshipContainer);

const Internships = ({ scrollPosition }) => {
 

  return (
    <Container
      fluid
      id="internships-section"
      className="internships-section d-flex flex-column justify-content-center pt-lg-5 pb-0 pb-md-3 pb-xl-5 pt-xl-0 pb-xl-0"
    >
      <InternshipContainerVP scrollPosition={scrollPosition}/>
    </Container>
  );
};

export default Internships;
