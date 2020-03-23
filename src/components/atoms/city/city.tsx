import React, { useState } from 'react';
import "./city.scss";
import { Container, Row } from 'react-bootstrap';
import PopUp from '../popUp/popUp';

interface IState{
    pop: boolean;
}


const City: React.FC=()=>{

    const [state, setState]= useState<IState>({
        pop:false
    });
    function popUp(){
        setState({ pop: true});
    }

    function popDown(){
        setState({pop:false})
    }

    const message = <p>Sorry. This service is not available right now.</p>

    return(
        <Container fluid className="addCity">
            <Row className="cityBox" onClick={()=>popUp()}>
                <span>+</span>
                <span>Add City</span>
            </Row>
            {state.pop?<PopUp message={message} pop={()=>popDown()}/>:null}
        </Container>
    )
}

export default City;