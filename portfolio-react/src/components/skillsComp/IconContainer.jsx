import Col from 'react-bootstrap/Col';

import handleViewport from 'react-in-viewport';

const IconContainer = (props) => {

    const { inViewport, enterCount, forwardedRef } = props;
    // const color = inViewport ? '#217ac0' : '#ff9800';
    // const text = inViewport ? 'In viewport' : 'Not in viewport';

    // if(inViewPort && enterCount === 1){
    //     let animations = 
    //  }
    const animations = inViewport && enterCount === 1 ? "animate__fadeIn animate__delay-1s" : ""
    console.log(animations)
    return (
        <Col ref={forwardedRef} className={`icon-container animate__animated ${animations} `}>
            <div>{props.svgInfo}</div>
            <div>{props.languageName}</div>
        </Col>);
}


export default IconContainer;