import Col from 'react-bootstrap/Col';


const IconContainer = (props) => {

    const { inViewport, enterCount, forwardedRef } = props;

    const animations = inViewport && enterCount === 1 ? "animate__animated animate__fadeIn animate__delay-1s" : ""

    return (
        <Col    ref={forwardedRef} className={`icon-container ${animations}`} >
            <div>{props.svgInfo}</div>
            <div>{props.languageName}</div>
        </Col>);
}


export default IconContainer;