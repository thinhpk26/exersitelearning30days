import React from 'react'

const Square = (props) => {
    const {number} = props
    const backgroundPrime = {
      backgroundColor: '#fd5e53'
    }
    
    const backgroundEven = {
      backgroundColor: '#21bf73'
    }
    
    const backgroundOdd = {
      backgroundColor: '#fddb3a'
    }
  
    if(prime(number)) {
      return (<li style={backgroundPrime} className='square'><h2>{number}</h2></li>)
    } else if(number % 2!== 0) {
      return (<li style={backgroundOdd} className='square'><h2>{number}</h2></li>)
    } else {
      return (<li style={backgroundEven} className='square'><h2>{number}</h2></li>)
    }
  }
  const Test1Day6 = () => {
    const numbers = []
    for(let i = 0; i < 32; ++i) {
      numbers.push(i)
    }
    const listSquare = numbers.map((number) => <Square key={number} number={number}/>)
    return (<ul className='list-square'>{listSquare}</ul>)
  }
  
  function prime(num) {
    if(num === 1 || num === 0) {
      return false
    } else if(num === 2) {
      return true
    } else {
      for(let i = 2; i < num; ++i) {
        if(num % i === 0) {
          return false
        }
      }
      return true
    }
}

export default Test1Day6