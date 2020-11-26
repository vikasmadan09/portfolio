import React, { useState, useLayoutEffect} from 'react';
import { Jumbotron, Row, Col, Container } from 'reactstrap';
import a from './img/dp.png';
import Icon from './common/Icon';

export const Home = ()=>{
    const [size,setSize]=useState();

    useLayoutEffect(()=>{
        function updateSize(){
            setSize([window.innerWidth,window.innerHeight]);
        }
        window.addEventListener('resize',updateSize);
        return ()=>window.removeEventListener('resize',updateSize);
    },[size])

    return (
        <Jumbotron>
            <Container fluid>
            <Row>
                <Col sm='6'>
                    <h1>Vikas Madan</h1>
                    <p>UI (ReactJS) Developer</p>
                </Col>
                <Col sm='2'>
                
                </Col>
                <Col sm='4'>
                    <Row>
                        <Col sm='6'>
                            <div >
                           <ul className='p-0 list-unstyled header-list'>
                               <li><Icon icon='phone'/> +91 9035733932
                               </li>
                                <li><Icon icon='envelope'/><a className={size&&size.innerWidth<1200?'d-none':''} href='mailto:vikasmadan09@gmail.com' >vikasmadan09@gmail.com</a></li>
                                <li><Icon icon='map-marker-alt'/>Nagarabhavi, Bengaluru</li>
                            </ul> 
                        
                            </div>
                        
                        </Col>
                        <Col sm='6'>
                        <img className='rounded-circle position-absolute disp-img' alt='Vikas Madan' width='210' height='115' src={a}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
        </Jumbotron>
    )
} 