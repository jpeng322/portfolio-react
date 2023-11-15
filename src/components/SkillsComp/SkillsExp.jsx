import Col from "react-bootstrap/Col";

import handleViewport from "react-in-viewport";
import { useEffect, useState, useRef } from "react";
const SkillsExpHeader = (props) => {
  const { inViewport, enterCount, forwardedRef } = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";
  return (
    <Col
      ref={forwardedRef}
      className={`experience-header text-center text-xl-start ${animations}`}
      xs={12}
    >
      Skills & Experience
    </Col>
  );
};

const SkillsExpText = (props) => {
  const { inViewport, enterCount, forwardedRef, scrollPosition } = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";

  const [journey, setJourney] = useState("");
  const [tkh, setTkh] = useState(""); 
  const [figma, setFigma] = useState("")
  const [responsive, setResponsive] = useState("");
  const [other, setOther] = useState("");
  const [perscholas, setPerscholas] = useState("");

  const [style, setStyle] = useState(false);
  useEffect(() => {
    const colorChange = () => {
      if (window.scrollY >= 700) {
        // setAllValues({ ...allValues, journey: "bold" });
        setJourney("bold");
      }

      if (window.scrollY >= 800) {
        setTkh("bold");
      }

      if (window.scrollY >= 850) {
        setFigma("bold");
      }

      if (window.scrollY >= 900) {
        setResponsive("bold");
      }

      if (window.scrollY >= 1000) {
        setOther("bold");
      }

      if (window.scrollY >= 1100) {
        setPerscholas("bold");
      }
    };

    window.addEventListener("scroll", colorChange);

    return () => window.removeEventListener("scroll", colorChange);
  }, []);

  return (
    <Col ref={forwardedRef} className={animations} xs={12}>
      <div>
        {/* As a web development fellow at{" "}
        <span className={journey}>The Knowledge House</span>, I was able to
        learn numerous tools and frameworks, work in a team setting with web
        development and UIUX colleagues, and create multiple fullstack projects.
        Some of my projects include: <span className={tkh}>Booked</span> - a
        site that allows providers to post their service online for clients to
        book, <span className={tkh}>Gym Social</span> - a web application where
        users can track their workout and show off their progress, and{" "}
        <span className={tkh}>PawPets</span> - a site for users to upload
        pictures of their cute pets. */}
        During my past year as a web development fellow at{" "}
        <span className={journey}>The Knowledge House</span>, I was able to
        develop my skills through 480 hours of instructor-led classes, creating
        numerous full-stack projects, and participating in Bloomberg’s
        hackathon. Notable projects I created within my fellowship are{" "}
        <span className={tkh}>Booked</span>, a website that allows providers to
        post their service online for clients to book, and{" "}
        <span className={tkh}>Bloomin</span>, an informational web page where
        users can find information and incentives to be more environmentally
        sustainable. In these projects, I was able to collaborate with other
        UIUX designers and professional engineers, using  <span className={figma}>Figma</span> and  <span className={figma}>Git</span> in a team
        setting.
        {/* My <span className={journey}>journey</span> began almost a year ago, after being introduced to coding by a high school friend and discovering enjoyment in web development. Currently, I am a web development fellow at <span className={tkh}>The Knowledge House</span>, honing my programming skills through daily technical classes, individual and group projects, and online self learning. */}
      </div>
      <div className="mt-3">
        {/* Outside of my projects, I have particated in{" "}
        <span className={responsive}>Bloomberg's</span> hackathon and codecon.
        In the 3-day hackathon, my team was able to create a MVP called{" "}
        <span className={responsive}>Bloomin</span>, an informational page where
        users can find information and incentives to be more environmentally
        sustainable. The codecon presented technical questions for participants
        to solve, where I was fortunate enough to earn third place! My main
        interest now is to continue developing my skills through implementing{" "}
        <span className={other}>testing</span> and improving{" "}
        <span className={other}>scalibility</span> of future projects. */}
        {/* As of now, my main interest is in creating <span className={responsive}>responsive websites</span>  and applications that are easily accessible and practical. Some of my latest work includes an informational website on cat breeds using <span className={other}>React</span> and a fullstack CRUD application which allows its users to write down journal notes. My goals for the near future are to create a more complex full-stack application involving in-depth testing, improved scalability, and additional functionality. */}
        Additionally, over the summer, I acquired my{" "}
        <span className={responsive}>AWS Certified Cloud Practitioner </span>{" "}
        certification while interning remotely for two organizations -{" "}
        <span className={other}>Kill That Noise</span>, a sports-related web
        application that features current articles and game scores, and{" "}
        <span className={other}>Bazar</span>, an e-commerce platform that
        features numerous brands and products. My roles included implementing
        responsive designs, creating reusable components, and increasing
        functionality and performance.
      </div>
      <div className="mt-3">
        Currently, I am a student in <span className={perscholas}>Per Scholas React Developer Program</span>, a
        program focused on frontend engineering. By the end of the program, I
        will learned Angular and Vue, while also gaining further knowledge in
        Javascript, Typescript, and React.
      </div>
    </Col>
  );
};

const SkillsExpCard = (props) => {
  const { inViewport, enterCount, forwardedRef } = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";

  return (
    <Col
      ref={forwardedRef}
      className={`exp-card p-3 ${animations}`}
      xs={12}
      lg={11}
      xl={12}
    >
      <div className="exp-card-header">
        <p>Web Development Fellow</p>
      </div>
      <div className="exp-card-subheader">
        <p className="exp-subheader-top">The Knowledge House</p>
        <p className="subheader"> July 2022 - Present</p>
        <p className="subheader">Course Grade: 99/100</p>
      </div>
      <div className="exp-card-text">
        <p>
          {" "}
          Enhanced technical skills and work readiness through 15 hours of
          technical instruction, 20 hours of technical coursework and one day of
          professional development per week.
        </p>
      </div>
    </Col>
  );
};

const SkillsExpHeaderVP = handleViewport(SkillsExpHeader);
const SkillsExpTextVP = handleViewport(SkillsExpText);
const SkillsExpCardVP = handleViewport(SkillsExpCard);

const SkillsExp = (props) => {
  return (
    <Col
      className="about-description p-0 d-flex flex-column align-items-center align-items-xl-start gap-3 "
      xs={12}
      md={12}
      lg={12}
      xl={6}
    >
      <SkillsExpHeaderVP />
      <SkillsExpTextVP />
      {/* <SkillsExpCardVP /> */}
    </Col>
  );
};

export default SkillsExp;
