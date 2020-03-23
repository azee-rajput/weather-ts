import React from 'react';
import {Cloud} from "styled-icons/fa-solid/Cloud";
import './tempBg.scss';

const TempBg: React.SFC=()=>{
    return(
        <span className="bgMain">
            <span><Cloud size="80"/></span>
            <span><Cloud size="120"/></span>
            <span><Cloud size="60"/></span>
        </span>
    )
}

export default TempBg;