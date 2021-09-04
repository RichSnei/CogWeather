import data from '../data'
const reducerInit = {
    data: {},
    canSubmit: false,
    cityState: '',
    city: '',
    state: '',
    currentDate: '',
    currentTime: '',
    haveData: false,
    isError: false,
    errorStr: ''
}
const setCityState = (state, action) => {
    const cityState = action.payload.cityState.trim();
    const newState = {
        ...state,
        cityState: action.payload.cityState,
        canSubmit: ( cityState && cityState.length > 0)
    }

    return newState;
}

const submitCityState = (state, action) => {
    let newState = {
        ...state
    }
    const cityData = state.cityState.split(',')
    if (cityData.length !== 2) {
        newState.isError = true;
        newState.errorStr = 'Incorrectly formated city and state (i.e. "city, state")'
        return newState;
    }
    
    const cityName = cityData[0].trim();
    const cityNameLc = cityName.toLowerCase();
    const stateName = cityData[1].trim()
    const stateNameUc = stateName.toUpperCase();
    
    const stateObj = data.States[stateNameUc]
    if (stateObj === undefined || stateObj.citiesObj[cityNameLc] === undefined) {
        newState.isError = true;
        newState.haveData = false;
        newState.errorStr = `Unable to get weather data for ${state.cityState.trim()}`;
        return newState;
    }

    const cityForecast = stateObj.citiesObj[cityNameLc];
    newState = {
        ...state,
        haveData: true,
        isError: false,
        errorStr: '',
        currentDate: stateObj.currentdate,
        currentTime: stateObj.time,
        state: stateNameUc,
        city: cityName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
        forecast: cityForecast[0]
    }

    return newState;
}

const weatherData = (state = {...reducerInit}, action) => {
    let newState = {};
    switch (action.type) {
      case "SET_CITY_STATE": 
        newState = setCityState(state, action);
        break;

        case "SUBMIT_CITYSTATE": 
            newState = submitCityState(state, action);
            break;
        
        default:
            newState = state;
            break;
    }
    return newState;
}
  
  export default weatherData;
