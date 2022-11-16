import React from "react";
import './Charts.css'
import ChartBar from "./ChartBar";
export default function Charts(props){
const datapointsvalues = props.Datapoints.map(Datapoint=>Datapoint.value)
const Maximise= Math.max(...datapointsvalues)
    return(
        <div className="chart">
{props.Datapoints.map(Datapoint=>(<ChartBar
    key={Datapoint.label}
     value={Datapoint.value}
     maxValue={Maximise}
    label={Datapoint.label}/>)
    
)}
        </div>
    )
}