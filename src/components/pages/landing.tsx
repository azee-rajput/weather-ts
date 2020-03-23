import React, { useState } from 'react';
import Weather from '../molecules/weather/weather';
import './landing.scss';

interface IState{
  counter:boolean;
    latitude: number;
    longitude: number;
    found:boolean;
    watch:null | number; // it may have these types
}

interface IProps{
  lat:string | undefined;
  long:string | undefined;
}


const Landing: React.FC=()=>{

  let [state, setState] = useState<IState>({
    longitude: -122.0400,
    latitude: 37.3700,
    found:false,
    watch: null,
    counter:false
  });

  let watch=0;
  if(!state.found){ // it was keep refreshing the page so i had to stop it by force
    watch = navigator.geolocation.watchPosition(position=>{
      setState({
        ...state, // remaining states doesnt change their values
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        found:true
      })
    },error => console.log(error))
  }

  if(state.found){
    navigator.geolocation.clearWatch(watch); // need to clear watch or else it will keep watching and refreshing coords
  }

  return(
    <div className="landing">
      <Weather lat={state.latitude} long={state.longitude} found={state.found}/>
    </div>
)

}

export default Landing;