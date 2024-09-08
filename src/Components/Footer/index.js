import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsLinkedin, BsGithub, BsX, BsInstagram, BsGoogle } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow me </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/utkarsh-kaurav-311385255/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/04utkarsh-k" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://x.com/utkarshhh_04" target="_blank">
                                        <BsX />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="utkarshhh_04" target="_blank">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="UtkarshKaurav04@gmail.com" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© 2024 Cineverse. All rights reserved. Developed and Designed by <a href="https://github.com/04utkarsh-k" target="_blank" rel="noreferrer">Utkarsh Kaurav</a></small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;