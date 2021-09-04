import React from 'react';

class WeatherWidget  extends React.Component {
    render() {
        const {city, state, forecast} = this.props;
        const markup = (
            <div className="weather-widget">
                <div className="overview">
                    <div>{city}, {state}</div>
                    <div>Weather for {forecast.Date}</div>
                </div>
                <div className="forecast">
                    <div>As of {forecast.Time}</div>
                    <div>{forecast.temprature}&deg;</div>
                    <div>feels like {forecast.feels}&deg;</div>
                </div>
            </div>
        )
        return markup;
    }
}

export default WeatherWidget;
