import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from './actions'

class Weather extends Component {
  render () {
    switch (this.props.status) {
      case 'loading':
        return <p>Loading . . .</p>

      case 'success':
        return <p>{`${this.props.cityName}: ${this.props.temperature}° ${this.props.weather}`}</p>

      case 'failure':
        return <p>天气信息加载失败</p>

      default:
        throw new Error('unexpected status ' + this.props.status)
    }
  }

  componentDidMount() {
    this.props.select(this.props.match.params.city)
  }
}

const
  mapStateToProps = state => ({
    status: state.status,
    cityName: state.cityName,
    temperature: state.temperature,
    weather: state.weather,
  }),

  mapDispatchToProps = dispatch => ({
    select: cityName => dispatch(fetchWeather(cityName))
  })

const FinalWeather = connect(mapStateToProps, mapDispatchToProps)(Weather)
export default props => <FinalWeather key={props.match.params.city} {...props} />
