import React, {Component } from 'react';
import api from '../../../api';
import Temp from '../../atoms/temp/temp';
import { Container, Row, Col} from 'react-bootstrap';
import Graph from '../../atoms/graph/graph';

import './weather.scss';
import City from '../../atoms/city/city';
import NavBar from '../../atoms/navBar/navBar';
import TabView from '../../atoms/tabs/tabs';

interface IProps{
    long:number;
    lat:number;
    found:boolean;
}

interface IState{
    data: any;
    forecast:any;
    found: boolean;
    lat:number;
    long:number;
}

const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class Weather extends Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            found: false,
            data:[],
            forecast:[],
            lat:0.0,
            long:0.0,
        }
    }

    componentDidMount(){
        if(!this.state.found){
            api.today(data=>this.setState({data:data}), this.props.lat, this.props.long);
            api.today(data=>this.setState({forecast:data}), this.props.lat, this.props.long);
            if(this.props.found){
                this.setState({found:true});
            }
        }
    }

    componentDidUpdate(){
        if(!this.state.found && this.props.found){
            api.today(data=>this.setState({data:data}), this.props.lat, this.props.long);
            api.forecast(data=>this.setState({forecast:data}), this.props.lat, this.props.long);
            if(this.props.found){
                this.setState({found:true});
            }
        }

        if(this.state.lat !== this.props.lat || this.state.long !== this.props.long){
            this.setState({lat: this.props.lat, long: this.props.long})
            api.today(data=>this.setState({data:data}), this.props.lat, this.props.long);
            api.forecast(data=>this.setState({forecast:data}), this.props.lat, this.props.long);
        }
    }
    

render(){
    if(this.state.data.sys===undefined || this.state.data.sys.sunrise===undefined){
        return null;
    }

    //////////////////////timezone
    var zoneHours = Math.floor(this.state.data.timezone/3600);
    var zoneMinutes = Math.floor(this.state.data.timezone%3600/60);
    var todayUTC = new Date( new Date().getTime() + (zoneHours * 3600 * 1000)).toUTCString().replace( / GMT$/, "" );

    /// today date/day/month
    var today = new Date(todayUTC);
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();
    
    return(
        <Container fluid className="weather">
            <Row className="navigation"><NavBar/></Row>
            <Row className = "mainRow">
                <Col lg={7} className="future paddingTop sidePaddings">
                    <Row className="heading"><span>Weather <b>4cast</b></span></Row>
                    <Row className="city paddingTop">
                        <Col sm={{span:3}}><City/></Col>
                        <Col sm={{span:3}}><City/></Col>
                        <Col sm={{span:3}}><City/></Col>
                        <Col sm={{span:3}}><City/></Col>
                    </Row>
                    <Row className="table4cast paddingTop">
                        <TabView data={this.state.forecast} day={day+1}/>
                    </Row>
                </Col>

                <Col lg={5} className="current paddingTop">
                    <Row className="rowTemp" style={{margin:"0"}}>
                        <Temp city={this.state.data.name} 
                        country={this.state.data["sys"].country} 
                        temp={this.state.data["main"].temp} 
                        feel={this.state.data["main"].feels_like} 
                        icon={this.state.data.weather["0"].icon}
                        sunrise={this.state.data["sys"].sunrise}
                        sunset={this.state.data["sys"].sunset}
                        condition={this.state.data.weather["0"].main}
                        day={DAY[day]} month={MONTH[month]} date={date} minutes={zoneMinutes} hours={zoneHours}/>
                    </Row>
                    <Row className="rowGraph sidePaddings paddingTop" style={{margin:"0"}}>
                        <Graph pressure={this.state.data["main"].pressure} 
                        humidity={this.state.data["main"].humidity}
                        minTemp={this.state.data["main"].temp_min}
                        maxTemp={this.state.data["main"].temp_max}
                        wind={this.state.data.wind.speed}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
    
}


export default Weather;