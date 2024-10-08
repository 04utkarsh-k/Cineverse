import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin, BsX, BsInstagram, BsGoogle, BsGithub} from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Linkedin', link:'https://www.linkedin.com/in/utkarsh-kaurav-311385255/', text:'Linkedin'},
        {name:'GitHub', link:'https://github.com/04utkarsh-k', text:'Github'},
        {name:'X', link:'https://x.com/utkarshhh_04', text:'X'},
        {name:'Instagram ID', link:'utkarshhh_04', text:'Instagram ID'},
        {name:'Email', link:'UtkarshKaurav04@gmail.com',  text:'Gmail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH ME</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;