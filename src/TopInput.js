import React from 'react';
import { connect } from "react-redux";
import allActions from './actions/index';

import CogBtn from './shared/CogBtn'
class TopInput extends React.Component {
    render() {
        const cityState = this.props.weatherData.cityState;
        const enableSubmit = cityState.trim().length === 0;
        const dispatch = this.props.dispatch;
        return (
            <>
            <h2>Cognizant Weather App</h2>
            <form id="header" onSubmit={(e) => {e.preventDefault(); console.log('test')}}>
                <div>
                    <label>Enter City: &nbsp;
                        <input type="text" value={cityState} onChange={(e) => { (dispatch)(allActions.weatherActions.setCityState(e.target.value))}}></input>
                    </label>&nbsp;
                    <CogBtn label="Submit" disabled={enableSubmit} 
                            onClick={() => {  (dispatch)(allActions.weatherActions.submitCityState())} } />
                </div>
            </form>
            </>
        )
}
}

function mapStateToProps(state) {
    const weatherData = state.weatherData;
    return {
        weatherData,
    };
  }

//   function mapDispatchToProps() {
//       return {
//           allActions,
//       }
//   }

export default connect(mapStateToProps)(TopInput);
// export default TopInput 
