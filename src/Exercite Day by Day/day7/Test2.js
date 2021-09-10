import React, {Component} from 'react'


function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
} 

class Des extends Component {
  render() {
    const {flag, name, capital, population} = this.props.allState.country
    const {isHasFlag} = this.props.allState
    const populationInto = numberWithCommas(population)
    let flagInto = isHasFlag ? flag : "https://restcountries.eu/data/vnm.svg"
    let nameInTo = isHasFlag ? name : "Please press into button to change country!!!"
    return (
      <div className='description'>
        <div className='ensign'>
          <img src={flagInto} alt='flag'></img>
          <h1>{nameInTo}</h1>
        </div>
        <div className='capital'>
          <h2>Capital: </h2>
          <h3>{capital}</h3>
        </div>
        <div className='population'>
          <h2>Population: </h2>
          <h3>{populationInto}</h3>
        </div>
      </div>
    )
  }
}
  
class Test2Day7 extends React.Component {
  state = {
    arrayTest: [],
    isHasFlag: false,
    number: null,
    country: {
    ensign: '',
    name: '',
    capital: '',
    population: '',
    }
  }

  setNew = () => {
    const API_URL = 'https://restcountries.eu/rest/v2/all'
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.randomCountriesTest(data)
      })
  }

  randomCountriesTest = (data) => {
    let random
      let arrayAdd = this.state.arrayTest
      do {
      random = Math.floor(Math.random() * data.length)
      } while(random === this.state.number || arrayAdd.includes(random))
      arrayAdd.push(random)
      if(arrayAdd.length === data.length) {
      arrayAdd = []
      }
      this.setState({
      isHasFlag: true,
      arrayTest: arrayAdd,
      number: random,
      country: data[random],
      })
  }

  render() {
      return (
      <div className='test2-day7'>
          <Des allState={this.state}/>
          <button onClick={this.setNew} className='select-country'>Select Country</button>
      </div>
      )
  }
}

export default Test2Day7