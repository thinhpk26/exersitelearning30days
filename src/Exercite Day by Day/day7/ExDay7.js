import React from 'react'
import Day7 from './header.js'
import Test1Day7 from './Test1.js'
import Test2Day7 from './Test2.js'

const ExDay7 = (props) => {
    return (
        <div className='Day7'>
            <Day7 />
            <Test1Day7 isdark={props.isdark} onClick={props.onClick}/>
            <Test2Day7 />
        </div>
    )
}

export default ExDay7