import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./temp.scss";
import TempBg from './tempBg';
import Icon from '../icon/icon';



interface IProps{
    temp:number;
    city: string;
    country: string;
    feel: number;
    icon: string;
    sunset:number;
    sunrise:number;
    condition: string;
    date:number;
    minutes: number;
    hours: number;
}

interface IDayMonth{
    day: string;
    month: string;
}



const Temp: React.FC<IProps & IDayMonth>=(props)=>{

    //// sunrise
    var sunrise = new Date (props.sunrise);
    var sunriseHour = sunrise.getHours()+props.hours;
    var sunriseMinutes = sunrise.getMinutes()+props.minutes;

    sunriseHour = sunriseHour % 12;
    sunriseHour = sunriseHour ? sunriseHour : 12;
    if(sunriseMinutes > 60){
        sunriseHour++;
        sunriseMinutes = sunriseMinutes -60;
    }

    //// sunset
    var sunset = new Date (props.sunset);
    var sunsetHour = sunset.getHours()+props.hours;
    var sunsetMinutes = sunset.getMinutes()+props.minutes;

    sunsetHour = sunsetHour % 12;
    sunsetHour = sunsetHour ? sunsetHour : 12;
    if(sunsetMinutes > 60){
        sunsetHour++;
        sunsetMinutes = sunsetMinutes -60;
    }

    return(
        <Container fluid className="temp">
            <Row className="tempRow">
                <TempBg/>
                <Col className="todayRow" xs={12}>
                    <table className="box">
                        <tbody>
                        <tr>
                            <td className="icon">
                                <Icon condition={props.condition} size="30" type={props.icon}/>
                            </td>
                            <td className="todayTd">
                                <span className="today">Today</span> <br/>
                                <span className="date">{props.day+", "+ props.date+" "+ props.month}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Col>

                <Col xs={12} className="infoCol">
                    <span className="temperature">
                        {Math.round(props.temp-273.15)}
                        <sup className="degree">&deg;C</sup>
                    </span>
                    <p>{props.city+", "+props.country}</p>
                    <p className="feelsRise">
                        {"Feels like "+Math.round(props.feel-273.15)}<span>-</span>
                        {(props.icon.indexOf("d")>0 ? "Sunset "+sunsetHour+":"+sunsetMinutes : "Sunrise "+sunriseHour+":"+sunriseMinutes)}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Temp;