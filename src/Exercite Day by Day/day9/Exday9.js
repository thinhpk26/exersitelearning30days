import React, {Component} from "react";
// import Day9 from "./header.js";

class ExDay9 extends Component {
    constructor(props) {
      super(props)
      console.log('I am  the constructor and  I will be the first to run.')
      this.state = {
        firstName: 'John',
        data: [],
      }
    }
  
    componentDidMount() {
      console.log('I am componentDidMount and I will be last to run.')
      const API_URL = 'https://restcountries.eu/rest/v2/all'
      fetch(API_URL)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          this.setState({
            data,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <div className='Test'>
          <h1>React Component Life Cycle</h1>
          <h1>Calling API</h1>
          <div>
            <p>There are {this.state.data.length} countries in the api</p>
            <div className='countries-wrapper'>
              {this.state.data.map((country) => (
                <div>
                  <div>
                    {' '}
                    <img src={country.flag} alt={country.name} />{' '}
                  </div>
                  <div>
                    <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }

export default ExDay9