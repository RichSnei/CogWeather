import React from 'react';
import CogBtn from './CogBtn'

class TopInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        }
        this.submitCity = this.submitCity.bind(this);
        this.updateCityName = this.updateCityName.bind(this);
    }

    submitCity() {
        const city = this.state.city.trimEnd()
        if (city.length > 0) {
            alert(`got a city '${city}'`)
        }
    }

    updateCityName(e) {
        this.setState({city: e.target.value})
    }

    render() {
        const enableSubmit = this.state.city.trim().length === 0;
        return (
            <form id="header" onSubmit={this.submitCity}>
                <div>
                    <label>Enter City: &nbsp;
                        <input type="text" value={this.state.city} onChange={this.updateCityName}></input>
                    </label>
                </div>
                <div><CogBtn clickHandler={this.submitCity} type="submit" label="Submit" disabled={enableSubmit} /></div>
            </form>
        )
    }
}

export default TopInput 
