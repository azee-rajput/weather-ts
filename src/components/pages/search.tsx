import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Weather from '../molecules/weather/weather';
import './landing.scss';

interface IProps{
    lat:string ;
    long:string ;
  }

const Search: React.FC<RouteComponentProps<IProps>>=(props)=>{

    return (
      <div className="landing">
        <Weather lat={parseFloat(props.match.params.lat)} long={parseFloat(props.match.params.long)} found={false}/>
      </div>    
    )
}

export default Search;