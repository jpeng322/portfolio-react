import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
{/* <IconContainer
svgInfo={ }
languageName={ }
/> */}

const IconRow = (props) => {
    return (
        <>
            <Row className="m-0">
                <Col className="languages d-flex flex-column text-center">Languages</Col>
            </Row>
            <Row className="d-flex text-center m-0 gap-3 p-2">
                <Col className="icon-container">
                    <div>{svgInfo}</div>
                    <div>{languageName}</div>
                </Col>
                <Col className="icon-container">
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                            d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                    </svg></div>
                    <div>CSS</div>
                </Col>
                <Col className="icon-container">
                    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                            d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                    </svg></div>
                    <div>HTML</div>
                </Col>
            </Row>
        </>
    );
}

export default IconRow;