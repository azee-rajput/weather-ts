import React from 'react';
import {Cloud} from "styled-icons/fa-solid/Cloud";
import {CloudRain} from "styled-icons/fa-solid/CloudRain";
import {Sun} from "styled-icons/fa-solid/Sun";
import {Moon} from "styled-icons/fa-solid/Moon";
import {CloudLightning} from "styled-icons/boxicons-solid/CloudLightning";
import {Foggy} from "styled-icons/remix-fill/Foggy";
import {Snowflake} from "styled-icons/fa-regular/Snowflake";
import {Drizzle} from "styled-icons/remix-fill/Drizzle";

interface IProps{
    type: string;
    condition: string;
    size: string;
}

let ConditionIcon: JSX.Element;
let iconClear: JSX.Element;


const Icon: React.FC<IProps>=(props)=>{

    /// sun/moon icon for clear day/night
    if(props.type.indexOf("d")>-1){
        iconClear = <Sun color="#f6c300"  size={props.size}/>
    }else{
        iconClear = <Moon color="#4394ec"  size={props.size}/>
    }

    //// icon
    switch(props.condition){
        case "Thunderstorm":
            ConditionIcon = <CloudLightning color="#000053" size={props.size}/>
            break;
        case "Drizzle":
            ConditionIcon = <Drizzle color="#4394ec"  size={props.size}/>
            break;
        case "Rain":
            ConditionIcon = <CloudRain color="#4394ec"  size={props.size}/>
            break;
        case "Snow":
            ConditionIcon = <Snowflake color="#d1e4f8"  size={props.size}/>
            break;
        case "Clear":
            ConditionIcon = iconClear
            break;
        case "Clouds":
            ConditionIcon = <Cloud  color="#4394ec" size={props.size}/>
            break;
        default:
            ConditionIcon = <Foggy color="#d1e4f8" size={props.size}/>
            break;
    }

    return(
        <div>{ConditionIcon}</div>
    )
}

export default Icon;
