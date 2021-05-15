import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {WeatherComponent, WeatherForecast} from './WeatherComponent'
import BestDay from './BestDay'

//Make sure you import your components, feel free to change forecastInfo to test your code too!
let forecastInfo = [{dayOfWeek: "Monday", temperature: 39, condition: "cloudy", pollenCount:"High"},
{dayOfWeek: "Sunday", temperature: 79, condition: "snowy", pollenCount:"Moderate"}, 
{dayOfWeek: "Tuesday", temperature: 79, condition: "sunny", pollenCount:"Low"},
{dayOfWeek: "Wednesday", temperature: 79, condition: "sleety", pollenCount:"High"},
{dayOfWeek: "Friday", temperature: 79, condition: "", pollenCount:"Low"},
{dayOfWeek: "Saturday", temperature: 70, condition: "thunderstormy", pollenCount:"High"},
{dayOfWeek: "Thursday", temperature: 33, condition: "rainy", pollenCount:"High"}];

//DO NOT change anything here

ReactDOM.render(<div id = "toRender">
    <WeekForecast data = {forecastInfo}/>
    <BestDay data = {forecastInfo}/>
    {/* <WeatherComponent dayOfWeek="Monday" temperature="79" condition="sunny" pollenCount="High"/> */}
</div>
, document.getElementById('root'));
