import data from '../data'
const reducerInit = {
    data: {},
    validCity: false,
    cityState: '',
    city: '',
    state: '',
    currentDate: '',
    currentTime: '',
    haveData: false,
    isError: false,
    errorStr: ''
}

const weatherData = (state = {...reducerInit}, action) => {
    let newState = {};
    switch (action.type) {
      case "SET_CITY_STATE": {
            const cityState = action.payload.cityState.trim();
            newState = {
                cityState: action.payload.cityState,
                validCity: ( cityState && cityState.length > 0)
            }}
            break;

        case "SUBMIT_CITYSTATE": {
            const IL = data.States.IL;
            const city = IL.cities[0]
            newState = {
                ...state,
                haveData: true,
                currentDate: IL.currentdate,
                currentTime: IL.time,
                state: 'IL',
                city: city.name,
                forecast: city.forecast[0]
            }}
            break;
        
        default:
            newState = state;
            break;
    }
    return newState;
  };
  
  export default weatherData;
