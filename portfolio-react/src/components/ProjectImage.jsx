import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CatSheet from "../images/cat-cheetah-sheet.png"


const ProjectImage = (props) => {
    return (
        <Col className="container-transition d-flex justify-content-center m-3 p-0" xs={11} sm={9} md={5} lg={5} xl={4} xxl={3}>
                            <Image className="image project-image img-fluid" src={props.imageSrc}></Image>
                            <Col className="middle">
                                <div className="text-header">{props.description}</div>
                                <a href={props.website} target='_blank' className="text">Visit Website</a>
                                <footer>
                                    <div className="text-languages">
                                     {props.textlanguages}
                                    </div>
                                </footer>
                                <div>
                                    <a href={props.github} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="footer-github">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </Col>
                        </Col>
        
        );
}

export default ProjectImage;