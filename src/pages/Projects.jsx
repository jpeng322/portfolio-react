import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import handleViewport from "react-in-viewport";

//css
import "../CSS/Projects.css";

///images
// import CatSheet from "../outimages/cat-cheetah-sheet.png"
// import JournalApp from "../images/journal-app.png/"
// import Pokedex from "../images/pokedex.png"
// import TicTacToe from "../images/tic-tac-toe-pic.png"
// import EtchSketch from "../images/etchsketch.jpg"

//components
import ProjectImage from "../components/ProjectComp/ProjectImage";

const ProjectHeaderContainer = (props) => {
  const { inViewport, enterCount, forwardedRef } = props;

  const animations =
    inViewport && enterCount === 1
      ? "animate__animated animate__fadeIn animate__delay-1s"
      : "";

  return (
    <Row
      ref={forwardedRef}
      className={`project-header-container d-flex flex-column text-center ${animations}`}
    >
      <Col className="projects-header p-4 ">My recent work</Col>
      {/* <Col className="projects-header-subtext">Here are a few past design projects I've worked on.</Col> */}
    </Row>
  );
};
const ProjectImageVP = handleViewport(ProjectImage);
const ProjectHeaderVP = handleViewport(ProjectHeaderContainer);
const Projects = () => {
  return (
    <Container
      fluid
      id="projects-section"
      className="projects-section d-flex flex-column justify-content-center "
    >
      <ProjectHeaderVP />
      <Row className="d-flex justify-content-center ">
        <Col
          className="project-container d-flex "
          xs={11}
          md={12}
          lg={11}
          xl={12}
          xxl={12}
        >
          <Row className="project-container-row d-flex justify-content-center ">
          <ProjectImageVP
              imageSrc="/images/bloomin.png"
              description="Minimal viable product created during 3-day Bloomberg hackathon that promotes environmentally sustainable actions."
              textlanguages={
                <>
                  <div>
                    React
                    <span> • </span>
                    <span> TailwindCSS </span>
                    <span> • </span>
                    <span> Express </span>
                  </div>
                  <div>
                    <span> Node </span>
                    <span> • </span>
                    <span> PlanetScale </span>
                    <span> • </span>
                    <span> Prisma MySQL </span>
                  </div>
                </>
              }
              website="https://tkh-hackathon.vercel.app/"
              github="https://github.com/jpeng322/tkh-hackathon"
            />
            <ProjectImageVP
              imageSrc="/images/booked.PNG"
              description="A full-stack website that allows clients to book services from registered providers."
              textlanguages={
                <>
                  <div>
                    React
                    <span> • </span>
                    <span> StyledComponents </span>
                    <span> • </span>
                    <span> Express </span>
                  </div>
                  <div>
                    <span> Node </span>
                    <span> • </span>
                    <span> PlanetScale </span>
                    <span> • </span>
                    <span> Prisma MySQL </span>
                  </div>
                </>
              }
              website="https://booked-oxh9.onrender.com/"
              github="https://github.com/jpeng322/Booked"
            />
            <ProjectImageVP
              imageSrc="/images/gym_social.PNG"
              description="A full-stack website that allows users to track and show off their gym progress!"
              textlanguages={
                <>
                  <div>
                    React
                    <span> • </span>
                    <span> StyledComponents </span>
                    <span> • </span>
                    <span> Express </span>
                  </div>
                  <div>
                    <span> Node </span>
                    <span> • </span>
                    <span> Cloudinary </span>
                    <span> • </span>
                    <span> MongoDB </span>
                    
                  </div>
                </>
              }
              website="https://gym-social.onrender.com/"
              github="https://github.com/jpeng322/Gym-Social/tree/main"
            />
            <ProjectImageVP
              imageSrc="/images/pawpets.PNG"
              description="A full-stack website that allows users to show off and add pictures of their pets!"
              textlanguages={
                <>
                  <div>
                    React
                    <span> • </span>
                    <span> Express </span>
                    <span> • </span>
                    <span> PlanetScale - MySQL </span>
                  </div>
                  <div>
                    <span> Node </span>
                    <span> • </span>
                    <span> React Bootstrap </span>
                  </div>
                </>
              }
              website="https://pawpets.onrender.com/"
              github="https://github.com/jpeng322/TKH-Phase2-Project"
            />

            <ProjectImageVP
              imageSrc="/images/cat-cheetah-sheet.PNG"
              description="A responsive website that allows users to find information
                            on numerous cat breeds."
              textlanguages={
                <>
                  React
                  <span> • </span>
                  <span> React Bootstrap </span>
                </>
              }
              website="https://cat-cheetah-sheet.onrender.com/"
              github="https://github.com/jpeng322/cat-app-react-router/tree/main/cat-app"
            />

            <ProjectImageVP
              imageSrc="/images/journal-app.PNG"
              description="A full-stack journal application that allows the user to create an account and save daily
                            notes. "
              textlanguages={
                <>
                  <div>
                    React
                    <span> • </span>
                    <span> Express </span>
                    <span> • </span>
                    <span> MongoDB </span>
                  </div>
                  <div>
                    <span> Node </span>
                    <span> • </span>
                    <span> React Bootstrap </span>
                  </div>
                </>
              }
              website="https://my-journal-app-7sls.onrender.com"
              github="https://github.com/jpeng322/journal_react"
            />

            <ProjectImageVP
              imageSrc="/images/pokedex.PNG"
              description="Dynamic Pokedex that searches and displays statistics of a specific
                            pokemon."
              textlanguages={
                <>
                  Javascript
                  <span> • </span>
                  <span> CSS </span>
                  <span> • </span>
                  <span> HTML </span>
                </>
              }
              website="https://pokedex-n7lj.onrender.com/"
              github="https://github.com/jpeng322/TKH-pokedex"
            />

            <ProjectImageVP
              imageSrc="/images/tic-tac-toe-pic.PNG"
              description="A two-player Squid Games themed Tic-Tac-Toe game with custom player names, 
                            marker selection, and move
                            indicators."
              textlanguages={
                <>
                  Javascript
                  <span> • </span>
                  <span> CSS </span>
                  <span> • </span>
                  <span> HTML </span>
                </>
              }
              website="https://tic-tac-toe-lyart-rho.vercel.app/"
              github="https://github.com/jpeng322/TKH-Tic-Tac-Toe"
            />

            <ProjectImageVP
              imageSrc="/images/etchsketch.jpg"
              // imageSrc={EtchSketch}
              description="An online rendition of the Etch A Sketch drawing toy with rainbow, erasure, and color selection modes."
              textlanguages={
                <>
                  Javascript
                  <span> • </span>
                  <span> CSS </span>
                  <span> • </span>
                  <span> HTML </span>
                </>
              }
              website="https://etch-a-sketch-rose.vercel.app/"
              github="https://github.com/jpeng322/Etch-a-Sketch-Project"
            />
          </Row>
        </Col>

        {/* <Col></Col> */}
      </Row>
    </Container>
  );
};

export default Projects;
