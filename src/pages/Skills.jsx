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


const SkillsHeaderContainer = (props) => {

    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        <Row ref={forwardedRef} className={`skills-head d-flex flex-column align-items-center justify-content-center m-0 ${animations}`} >
            <Col className="skills-header text-center p-4" xs={12} md={6}>About me</Col>
            <Col className="skills-subtext text-center pt-0 p-4" xs={12} md={9} lg={7} xl={6} xxl={5}>Here you will find information about my journey, my experiences in the programming field, and the skills I have developed over the past year.</Col>
        </Row>
    )
}
const SkillsHeaderContainerVP = handleViewport(SkillsHeaderContainer)
const SkillsExpVP = handleViewport(SkillsExp)



const Skills = () => {

    return (
        <Container fluid id="skills-section" className="skills-section d-flex flex-column justify-content-center pt-5 pb-5 pt-xl-0 pb-xl-0">
            <SkillsHeaderContainerVP />
            <Row className='skills-information d-flex justify-content-center' >
                <Col className=" justify-content-center d-flex flex-column flex-xl-row align-items-center ps-5 pe-5 pb-5 pe-md-0 ps-md-0 pb-md-0 gap-5 gap-xl-4 gap-xxl-0" md={9}>
                    <SkillsExpVP />
                    <Col className=" icons d-flex flex-column justify-content-center align-items-center p-0" xs={12} md={12} lg={10} xl={6} xxl={6}>
                        <Col className='row-icon-container icons d-flex flex-column justify-content-center' xs={12} sm={11} md={11} lg={10} xxl={8}>
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

