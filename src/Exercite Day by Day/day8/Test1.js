import React, {Component} from "react";

const Box = ({onMouseEnter, coordinates :{screenX, screenY}}) => {
    const style = {
        marginLeft: screenX,
        marginTop: screenY,
    }
    return(
        <div onMouseEnter={onMouseEnter} className='never-touch' style={style}><h2>Move into here :)</h2></div>
    )
}

class Test1Day8 extends Component {
    state = {
        screenX: '100px',
        screenY: '100px',
    }
    random = () => {
        let randomCoorX
        let randomCoorY
        do {
            randomCoorX = Math.floor(Math.random() * 1400) + 'px'
            randomCoorY = Math.floor(Math.random() * 700) + 'px'
        } while(randomCoorX === this.state.screenX)
        this.setState({
            screenX: randomCoorX,
            screenY: randomCoorY,
        })
    }

    render() {
        return (
            <div className='space-white'>
                <Box onMouseEnter={this.random} coordinates={this.state}/>
            </div>
        )
    }
}

export default Test1Day8