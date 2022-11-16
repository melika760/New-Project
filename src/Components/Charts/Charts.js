import React from "react";
import './Charts.css'
import ChartBar from "./ChartBar";
export default function Charts(props){

    return(
        <div className="chart">
{props.Datapoints.map(Datapoint=>{
    <ChartBar
    key={Datapoint.label}
     value={Datapoint.value}
     maxValue={null}
    label={Datapoint.label}/>
})}
        </div>
    )
}