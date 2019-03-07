import React from 'react';
const Weather = (props) => {
  return(
       <div>  
        {props.city && <span className="location">{props.city}</span>}
        <div className="sun_icon"></div>
        {props.temperature && <p className="temp">{props.temperature}</p>}
        {props.description && <p className="w_desc"> {props.description}</p>}
        {props.error && <p>{props.error}</p>}
       </div>
   )
}
export default Weather;