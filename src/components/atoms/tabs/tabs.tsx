import { Tabs, Tab } from 'react-bootstrap';
import React from 'react';
import Forecast from '../forecast/forecast';
import './tabs.scss';

interface IProps{
    data: any;
    day: number;
}


const TabView: React.FC<IProps>=(props)=>{
    return(
        <Tabs defaultActiveKey="5day" className="tabDiv" id="tabDiv">
            <Tab className="tabCustom" eventKey="5day" title="5-Days">
                <Forecast forecast={props.data} day={props.day}/>
            </Tab>

            <Tab className="tabCustom paddingTop" eventKey="hourly" title="Hourly">
                <h4>Sorry. This service is not available at the moment.</h4>
            </Tab>

            <Tab className="tabCustom paddingTop" eventKey="monthly" title="Monthly">
                <h4>Sorry. This service is not available at the moment.</h4>
            </Tab>

            <Tab className="tabCustom paddingTop" eventKey="6month" title="6 months">
                <h4>Sorry. This service is not available at the moment.</h4>
            </Tab>
        </Tabs>
    )
}

export default TabView;