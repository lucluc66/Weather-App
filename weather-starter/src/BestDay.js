import React from 'react';
import './BestDay.css'
import {WeatherComponent, WeatherForecast} from './WeatherComponent'
import './WeatherComponent.css'

class BestDay extends React.Component {
    state = {
        weather: []
    }

    coldDay () {
        const cold = this.props.data.filter((figure) => figure.temperature <= 32);
    
        const listItems = cold.map((figure) => 
            <div><WeatherComponent dayOfWeek={figure.dayOfWeek} temperature={figure.temperature} condition={figure.condition} pollenCount={figure.pollenCount}/></div>
        );

        if(listItems.length === 0){
            this.setState({weather: <div><h2>No Days To Display</h2></div>});
        }else{
            this.setState({weather: listItems});
        }
    }

    warmDay(){
        const cold = this.props.data.filter((figure) => figure.temperature >= 33 && figure.temperature <=70);
    
        const listItems = cold.map((figure) => 
            <div><WeatherComponent dayOfWeek={figure.dayOfWeek} temperature={figure.temperature} condition={figure.condition} pollenCount={figure.pollenCount}/></div>
        );

        if(listItems.length === 0){
            this.setState({weather: <div><h2>No Days To Display</h2></div>});
        }else{
            this.setState({weather: listItems});
        }
 
    }

    hotDay(){
        const cold = this.props.data.filter((figure) => figure.temperature >70);
    
        const listItems = cold.map((figure) => 
            <div><WeatherComponent dayOfWeek={figure.dayOfWeek} temperature={figure.temperature} condition={figure.condition} pollenCount={figure.pollenCount}/></div>
        );

        if(listItems.length === 0){
            this.setState({weather: <div><h2>No Days To Display</h2></div>});
        }else{
            this.setState({weather: listItems});
        }
    }

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

        return(
            <div>
                <h1>What is your favorite Temperature?</h1>
                <div class="row">
                    <div class="col-sm">
                        <button class="cbtn" onClick={(e) => this.coldDay()}>Cold</button>
                    </div>
                    <div class="col-sm">
                        <button class="wbtn" onClick={(e) => this.warmDay()}>Warm</button>
                    </div>
                    <div class="col-sm">
                        <button class="hbtn" onClick={(e) => this.hotDay()}>Hot</button>
                    </div>
                </div>
                <div class="list">
                    {this.state.weather}
                </div>
            </div>
        );
    }
}

export default BestDay;
