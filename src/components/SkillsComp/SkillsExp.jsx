import Col from 'react-bootstrap/Col';

import handleViewport from 'react-in-viewport';

const SkillsExpHeader = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""
    return (
        <Col ref={forwardedRef} className={`experience-header text-center text-xl-start ${animations}`} xs={12}>
            Skills & Experience
        </Col>
    )
}

const SkillsExpText = (props) => {
    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        < Col ref={forwardedRef} className={animations} xs={12} >
            <div>
                My journey began almost a year ago, after being introduced to coding by a high school friend and discovering enjoyment in web development. Currently, I am a web development fellow at The Knowledge House, honing my programming skills through daily technical classes, individual and group projects, and online self learning.
            </div>
            <div className="mt-3">
                As of now, my main interest is in creating responsive websites and applications that are easily accessible and practical. Some of my latest work includes an informational website on cat breeds using React and a fullstack CRUD application which allows its users to write down journal notes. My goals for the near future are to create a more complex full-stack application involving in-depth testing, improved scalability, and additional functionality.
            </div>
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
            xs={12} lg={11} xl={12}>

            <div className="exp-card-header">
                <p>Web Development Fellow</p>
            </div>
            <div className="exp-card-subheader">
                <p className="exp-subheader-top">The Knowledge House</p>
                <p className="subheader"> July 2022 - Present</p>
                <p className="subheader">Course Grade: 99/100</p>
            </div>
            <div className="exp-card-text">
                <p> Enhanced technical skills and work readiness through 15 hours of technical
                    instruction, 20 hours of technical coursework and one day of
                    professional development per week.
                </p>
            </div>

        </Col>
    )
}

const SkillsExpHeaderVP = handleViewport(SkillsExpHeader)
const SkillsExpTextVP = handleViewport(SkillsExpText)
const SkillsExpCardVP = handleViewport(SkillsExpCard)

const SkillsExp = (props) => {

    return (
        <Col className="about-description p-0 d-flex flex-column align-items-center align-items-xl-start gap-3 " xs={12} md={12} lg={12} xl={6}>
            <SkillsExpHeaderVP />
            <SkillsExpTextVP />
            <SkillsExpCardVP />
        </Col>
    );
}

export default SkillsExp;