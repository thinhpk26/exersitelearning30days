import React from 'react'

const InputTest2 = (props) => {
    const {data, type, placeholder} = props
    const {
      className,
    } = data
    return <input className={className} type={type} placeholder={placeholder}></input>
  }
  
  const Test2 = () => {
    const data = {
      header: 'SUBCRIBE',
      subHeader: 'Sign up with your email address to receive news and updates',
      className: 'inputTest2',
      type: {
        text: 'text',
        email: 'email',
      },
      subcribe: 'Subcribe'
    }
    return (
    <form className='test2'>
      <h1>{data.header}</h1>
      <h4>{data.subHeader}</h4>
      <div>
        <InputTest2 data={data} type={data.type.text} placeholder='First Name'></InputTest2>
        <InputTest2 data={data} type={data.type.text} placeholder='Last Name'></InputTest2>
        <InputTest2 data={data} type={data.type.email} placeholder='Email'></InputTest2>
      </div>
      <button className='subcribe-test2'>{data.subcribe}</button>
    </form>)
} 

export default Test2