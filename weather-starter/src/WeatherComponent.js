import React from 'react';
import Cloudy from './iconfinder_cloud_2995000.png'
import Sunny from './iconfinder_sun_2995005.png'
import Rainy from './iconfinder_rain-cloud_2995003.png'
import Snowy from './iconfinder_snow-cloud_2995007.png'
import Sleety from './sleety.png'
import Thunderstormy from './iconfinder_flash-cloud_2995010.png'
import Error from './icon.png'
import './WeatherComponent.css'

function validateTime(date){
    const dates = ['monday',  'tuesday', "wednesday", "saturday", "thursday", "friday", "sunday"];
    return dates.includes(date.toLowerCase());
}

class WeatherComponent extends React.Component {
   render() {
       let condition;
       let temperature;
       let date;
       let humidity;
       
       switch(this.props.condition){
           case 'cloudy':
               condition = <img src={Cloudy} width="200" height="200"/>
               break;
            case 'sunny':
                condition = <img src={Sunny} width="200" height="200"/>
                break;
            case 'rainy':
                condition = <img src={Rainy} width="200" height="200"/>
                break;
            case 'snowy':
                condition = <img src={Snowy} width="200" height="200"/>
                break;
            case 'sleety':
                condition = <img src={Sleety} width="200" height="200"/>
                break;
            case 'thunderstormy':
                condition = <img src={Thunderstormy} width="200" height="200"/>
                break;
            default:
                condition = <img src={Error} width="200" height="200"/>
                break;
       }

       if(!isNaN(this.props.temperature)){
           temperature = <h2>Temperature: {this.props.temperature} degree farenheit</h2>
       }else{
           temperature = <h2>ERROR</h2>
       }

       if(validateTime(this.props.dayOfWeek)){
           date = <h1>{this.props.dayOfWeek}</h1>
       }else{
           date = <h1>Invalid Date</h1>
       }

       if((this.props.pollenCount)==="High" || (this.props.pollenCount)==="Moderate" || (this.props.pollenCount)==="Low"){
           humidity = <h2>Humidity: {this.props.pollenCount}</h2>
       }else{
           humidity = <h2>ERROR</h2>
       }

       return (
            <div>
            {date}
            {condition}
            {temperature}
            {humidity}
            </div>);
   }
}

class WeatherForecast extends React.Component {
    render() {
        const sorter = {
            // "sunday": 0, // << if sunday is first day of week
            "monday": 1,
            "tuesday": 2,
            "wednesday": 3,
            "thursday": 4,
            "friday": 5,
            "saturday": 6,
            "sunday": 7
        }

        this.props.data.sort(function sortByDay(a, b) {
            let day1 = a.dayOfWeek.toLowerCase();
            let day2 = b.dayOfWeek.toLowerCase();
            return sorter[day1] - sorter[day2];
        });

        const listItems = this.props.data.map((figure) => 
            <div><WeatherComponent dayOfWeek={figure.dayOfWeek} temperature={figure.temperature} condition={figure.condition} pollenCount={figure.pollenCount}/></div>
        );
        return(
            <div class='col-sm'>
                {listItems}
            </div>
        );
    }
}

export {WeatherComponent, WeatherForecast}