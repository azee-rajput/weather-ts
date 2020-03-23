import React from 'react';
import './popUp.scss';
import { Container, Row } from 'react-bootstrap';

interface IProps{
    pop: Function;
    message?: JSX.Element;
}

const PopUp: React.FC<IProps>=(props)=>{

    return(
        <Container fluid className="pop">
            <Row className="box">
                <span onClick={()=>props.pop()}>&times;</span>
                {props.message}
            </Row>
        </Container>
    )
}

export default PopUp;