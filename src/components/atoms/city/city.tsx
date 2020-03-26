import React, { useState } from 'react';
import "./city.scss";
import { Container, Row } from 'react-bootstrap';
import PopUp from '../popUp/popUp';
import { Link } from 'react-router-dom';
import Paris from "../../../image/paris.jpg";
import NYC from "../../../image/nyc.jpg";
import Berlin from "../../../image/berlin.jpg";

interface IState{
    pop: boolean;
}

interface IProps{
    city?:boolean;
    num?: number;
}


const City: React.FC<IProps>=(props)=>{

    const [state, setState]= useState<IState>({
        pop:false
    });

    const City = [
        {"city":"Paris", "country":"FR", "lat": 48.8534, "lon": 2.3488, "img": Paris},
        {"city":"New York", "country":"US", "lat": 43.0004, "lon": -75.4999, "img": NYC},
        {"city":"Berlin", "country":"DE", "lat": 52.52437, "lon": 13.41053, "img": Berlin}
    ]

    function popUp(){
        setState({ pop: true});
    }

    function popDown(){
        setState({pop:false})
    }

    const message = <p>Sorry. This service is not available right now.</p>

    if(props.city){
        return(
            <Container fluid className="addCity">
                <Link to={props.num!==undefined?"/search/"+City[props.num].lat+"/"+City[props.num].lon:"/"}>
                    <img className="cityBox" src={props.num!==undefined?City[props.num].img:""} alt={props.num!==undefined?City[props.num].city:"city"}/>
                    <span>{props.num!==undefined?City[props.num].city+", "+City[props.num].country:null}</span>
                </Link>
            </Container>
        )
    }

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