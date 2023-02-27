import Col from 'react-bootstrap/Col';

import handleViewport from 'react-in-viewport';

const SkillsExpHeader = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""
    return (
        <Col ref={forwardedRef} className={`experience-header text-center text-lg-start ${animations}`} xs={12}>
            Skills & Experience
        </Col>
    )
}

const SkillsExpText = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        < Col ref={forwardedRef} className={animations} xs={10} >
            My journey began almost a year ago, after being reintroduced to coding by a high school friend and eventually discovering an interest in web development.Currently, I am a web development fellow at The Knowledge House, honing my skills in Javascript, CSS, and HTML, as well as learning the MERN stack.

            My goal is to create responsive websites and applications that users can easily navigate and enjoy accessing.Some of my latest work includes a simple website to learn about cat breeds using React and a CRUD that allows its users to write down journal notes.I hope to broaden my expertise and implement animations or custom features.
        </Col >
    )
}

const SkillsExpCard = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        <Col
            ref={forwardedRef}
            className={`exp-card p-3 ${animations}`}
            xs={10}>
            <p> Enhanced technical skills and work readiness through 15 hours of technical
                instruction, 20 hours of technical coursework and one day of
                professional development per week.
            </p>
        </Col>
    )
}

const SkillsExpHeaderVP = handleViewport(SkillsExpHeader)
const SkillsExpTextVP = handleViewport(SkillsExpText)
const SkillsExpCardVP = handleViewport(SkillsExpCard)

const SkillsExp = (props) => {

    return (
        <Col className="about-description p-5 d-flex flex-column align-items-center align-items-lg-start gap-3 border border-success" xs={12} md={12} lg={6}>
            <SkillsExpHeaderVP />
            <SkillsExpTextVP />
            <SkillsExpCardVP />
        </Col>
    );
}

export default SkillsExp;