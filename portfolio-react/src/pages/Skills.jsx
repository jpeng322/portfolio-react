import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
// import IconRow from '../components/skillsComp.jsx/IconRow';
// import IconContainer from '../components/skillsComp/IconContainer';
import IconRow from '../components/skillsComp/IconRow';
import IconContainer from '../components/skillsComp/IconContainer';

import FirstRowIcons from '../components/skillsComp/FirstRowIcons';
import SecondRowIcons from '../components/skillsComp/SecondRowIcons';
import ThirdRowIcons from '../components/skillsComp/ThirdRowIcons';
// import FirstRowIcons from '../../skillsComp.jsx/firstRow';
// import SecondRowIcons from '../../skillsComp.jsx/SecondRowIcons';
// import ThirdRowIcons from '../../skillsComp.jsx/ThidRowIcons';

//css
import "../CSS/Skills.css"



const Skills = () => {
    return (
        <Container fluid className="skills-section">
            <Row className='skills-head d-flex flex-column align-items-center justify-content-center'>
                {/* <div className="skills-header text-center">About me</div>
                <div className="skills-subtext text-center">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div> */}
                <Col className="skills-header text-center p-4" xs={12} md={6}>About me</Col>
                <Col className="skills-subtext text-center pt-0 p-4" xs={12} md={6}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Col>
            </Row>
            <Row className='skills-information d-flex justify-content-center' >
                <Col className="border border-primary justify-content-center d-flex flex-column flex-lg-row p-0" md={9}>
                    <Col className="about-description p-5 d-flex flex-column align-items-center align-items-lg-start gap-3 border border-success" xs={12} md={12} lg={6}>
                        <Col className="experience-header text-center text-lg-start" xs={12}>
                            Skills & Experience
                        </Col>
                        <Col xs={10}>
                            My journey began almost a year ago, after being reintroduced to coding by a high school friend and eventually discovering an interest in web development. Currently, I am a web development fellow at The Knowledge House, honing my skills in Javascript, CSS, and HTML, as well as learning the MERN stack.

                            My goal is to create responsive websites and applications that users can easily navigate and enjoy accessing. Some of my latest work includes a simple website to learn about cat breeds using React and a CRUD that allows its users to write down journal notes. I hope to broaden my expertise and implement animations or custom features.
                        </Col>
                        <Col className="exp-text p-3" xs={10}>
                            <p> Enhanced technical skills and work readiness through 15 hours of technical
                                instruction, 20 hours of technical coursework and one day of
                                professional development per week.
                            </p>
                        </Col>
                    </Col>
                    <Col className="icons d-flex flex-column justify-content-center align-items-center  border border-success" xs={12} md={12} lg={6} >
                        <Col className='row-icon-container icons d-flex flex-column justify-content-center  border ' xs={10} sm={8} md={8} lg={10} xxl={6}>
                            <FirstRowIcons />
                            <SecondRowIcons />
                            <ThirdRowIcons />
                        </Col>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;

