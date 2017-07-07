const
  fetchStarted = () => ({ type: 'FETCH_STARTED/WEATHER'}),

  fetchSuccess = result => ({
    type: 'FETCH_SUCCESS/WEATHER',
    result: {
      cityName: result.location.name,
      temperature: result.now.temperature,
      weather: result.now.text,
    }
  }),

  fetchFailure = error => ({ type: 'FETCH_FAILURE/WEATHER', error}),

  fetchWeather = (cityName = 'ip') => dispatch => {
    const WEATHER_KEY = '' // your weather-key
    const apiUrl = `/v3/weather/now.json?key=${WEATHER_KEY}&location=${cityName}`
    dispatch(fetchStarted())
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => dispatch(fetchSuccess(data.results[0])))
      .catch(e => dispatch(fetchFailure(e)))
  }

export { fetchStarted, fetchSuccess, fetchFailure, fetchWeather}
