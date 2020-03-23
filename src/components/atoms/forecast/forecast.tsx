import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./forecast.scss";

import {Droplet} from '@styled-icons/icomoon/Droplet';
import Icon from '../icon/icon';

interface IProps{
    forecast:any;
    day: number;
}

const FullDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day: any[]=[];
let min: number[]=[];
let max: number[]=[];

const Forecast: React.FC<IProps>=(props)=>{

    if(props.forecast.list===undefined){
        return null;
    }


   for (let i=1; i<6; i++){
        if(day.length===5){
            day.splice(0, day.length);
            min.splice(0,min.length);
            max.splice(0,max.length);
        }
        day.push(props.forecast.list[i*5]);
        min.push(Math.round(((props.forecast.list[i*5].main.temp_min-273.15+50)/130)*100));
        max.push(Math.round(((props.forecast.list[i*5].main.temp_max-273.15+50)/130)*100));
   }

    return(
        <Container fluid className="forecast">
            <Row>
                <table>
                    <tbody>
                        {day.map((item, index)=>
                            <tr className="week">
                                <td className="day">{FullDay[(props.day+index)>6?0:(props.day+index)]}</td>
                                <td className="colorGray"><Droplet size="15" color="#4293eb"/> {item.main.humidity+"%"}</td>
                                <td className="icon"><Icon size="25" type="d" condition={item.weather[0].main} /></td>
                                <td className="colorGray">{Math.round(item.main.temp_min-273.15)}<span>&deg;C</span></td>
                                <td className="minBar">
                                    <div className="dashed"></div>
                                    <div className="bar" style={{width:min[index]+"%"}}></div>
                                </td>
                                <td className="maxBar">
                                    <div className="dashed"></div>
                                    <div className="bar" style={{width:max[index]+"%"}}></div>
                                </td>
                                <td className="maximum">{Math.round(item.main.temp_max-273.15)}<span>&deg;C</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Row>
        
        </Container>
    )
}

export default Forecast;