import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Tachometer} from '@styled-icons/boxicons-regular/Tachometer';
import {ThermometerFull} from '@styled-icons/fa-solid/ThermometerFull';
import {ThermometerEmpty} from '@styled-icons/fa-solid/ThermometerEmpty';
import {Wind} from '@styled-icons/boxicons-regular/Wind';
import {Droplet} from '@styled-icons/icomoon/Droplet';

import "./graph.scss";

interface IProps{
    pressure: number;
    humidity: number;
    minTemp:number;
    maxTemp:number;
    wind: number;
}

const Graph: React.FC<IProps>=(props)=>{

    /// converting pressure into %... lowest 900hpa & highest 1100hpa
    const pressure = ((props.pressure-900)/200)*100;

    // converting temperatures from F to C
    const MinTemp= Math.round(props.minTemp-273.15);
    const MaxTemp = Math.round(props.maxTemp-273.15);

    // converting temp into %... lowest -60 & highest 70
    const minPerc = Math.round(((MinTemp+50)/130)*100);
    const maxPerc = Math.round(((MaxTemp+50)/130)*100);


    return(
        <Container fluid className="graph">
            <Row className="graphHeading">
                <span>Graphical Representaion</span>
            </Row>
            <Row className="graphRow">
                <Col  className="col-2 headingSide">
                    <span>High</span>
                    <span>Medium</span>
                    <span>Low</span>
                </Col>

                <Col className="col-10 graphBars">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="progress">
                                        <span className="dashed"></span>
                                        <span className="bar" style={{height:pressure+"%"}}></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="progress">
                                        <span className="dashed"></span>
                                        <span className="bar" style={{height:props.wind+"%"}}></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="progress">
                                        <span className="dashed"></span>
                                        <span className="bar" style={{height:props.humidity+"%"}}></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="progress">
                                        <span className="dashed"></span>
                                        <span className="bar" style={{height:minPerc+"%"}}></span>
                                    </div>
                                </td>
                                <td>
                                    <div className="progress">
                                        <span className="dashed"></span>
                                        <span className="bar" style={{height:maxPerc+"%"}}></span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><Tachometer size="20"/></td>
                                <td><Wind size="20"/></td>
                                <td><Droplet size="20"/></td>
                                <td><ThermometerEmpty size="20"/></td>
                                <td><ThermometerFull size="20"/></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

            </Row>
        </Container>
    )
}

export default Graph;