import React from 'react';
import { connect } from "react-redux";

class WeatherWidget  extends React.Component {
    render() {
        const { city, state, forecast, haveData } = this.props.weatherData;
        const markup = (haveData) ? (
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
        ) : <div></div>;

        return markup;
    }
}

function mapStateToProps(state) {
    const weatherData = state.weatherData;
    return {
        weatherData,
    };
  }

export default connect(mapStateToProps)(WeatherWidget);
