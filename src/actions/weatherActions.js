const setCityState = (cityState) => {
    return {
      type: "SET_CITY_STATE",
      payload: {
          cityState
      }
    };
  };
  
  const submitCityState = () => {
    return {
      type: "SUBMIT_CITYSTATE"
    };
  };
  
  const weatherActions = {
    setCityState,
    submitCityState
  };

  export default  weatherActions
