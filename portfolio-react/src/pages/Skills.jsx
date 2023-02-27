import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//components
import SkillsExp from '../components/SkillsComp/SkillsExp';
import FirstRowIcons from '../components/SkillsComp/FirstRowIcons';
import SecondRowIcons from '../components/SkillsComp/SecondRowIcons';
import ThirdRowIcons from '../components/SkillsComp/ThirdRowIcons';


//css
import "../CSS/Skills.css"


import handleViewport from 'react-in-viewport';


const SkillsExpVP = handleViewport(SkillsExp)



const Skills = () => {

    return (
        <Container fluid className="skills-section">
            <Row className='skills-head d-flex flex-column align-items-center justify-content-center'>
                <Col className="skills-header text-center p-4" xs={12} md={6}>About me</Col>
                <Col className="skills-subtext text-center pt-0 p-4" xs={12} md={6}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Col>
            </Row>
            <Row className='skills-information d-flex justify-content-center' >
                <Col className="border border-primary justify-content-center d-flex flex-column flex-lg-row p-0" md={9}>
                    <SkillsExpVP />
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

