import React from 'react'

const Country = (props) => {
    const {
      world,
      tenHighestPopulation: {
        country,
        population,
      },
    } = props
    const width = population / world * 100 + '%'
    const lineWidth = {
      width,
    }
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    const populationOutput = numberWithCommas(population)
    return(
      <tr className='country'>
        <td className='country-name'><h2>{country}</h2></td>
        <td className='country-line'>
          <div className='country-width' style={lineWidth}></div>
        </td>
        <td className='population'><h2>{populationOutput}</h2></td>
      </tr>
    )
  }
  
  const Test2Day6 = () => {
    const tenHighestPopulations = [
      { country: 'World', population: 7693165599 },
      { country: 'China', population: 1377422166 },
      { country: 'India', population: 1295210000 },
      { country: 'United States of America', population: 323947000 },
      { country: 'Indonesia', population: 258705000 },
      { country: 'Brazil', population: 206135893 },
      { country: 'Pakistan', population: 194125062 },
      { country: 'Nigeria', population: 186988000 },
      { country: 'Bangladesh', population: 161006790 },
      { country: 'Russian Federation', population: 146599183 },
      { country: 'Japan', population: 126960000 },
    ]
    const listCountrys = tenHighestPopulations.map((tenHighestPopulation) => <Country key={tenHighestPopulation.country} world={tenHighestPopulations[0].population} tenHighestPopulation={tenHighestPopulation}/>)
    return (
      <table className='list-countrys'>
        <tbody>
        {listCountrys}
        </tbody>
      </table>
    )
}

export default Test2Day6