import React, {Component} from "react"
import ExDay5 from './Exercite Day by Day/day5/ExDay5.js'
import ExDay6 from './Exercite Day by Day/day6/ExDay6.js'
import ExDay7 from './Exercite Day by Day/day7/ExDay7.js'
import ExDay8 from "./Exercite Day by Day/day8/ExDay8.js"
import ExDay16 from "./Exercite Day by Day/day16/Exday16.js"
import { BrowserRouter as Router, 
         Route, 
         Switch,
         NavLink,
         Prompt
       } from 'react-router-dom'

const NotFound = () => (
  <h1>The page your looking for not found</h1>
)

const Navbar = ({isAppear}) => {
  const nav = isAppear ? 'navbar appear' : 'navbar'
  return(
    <nav className={nav}>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/ExDay5'>ExDay5</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/Exday6'>ExDay6</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/Exday7'>ExDay7</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/Exday8'>ExDay8</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/Exday16'>ExDay16</NavLink>
        </li>
      </ul>
    </nav>
  )
}

// app
class App extends Component {
    state = {
      isAppear: false,
      isdark: false,
    }
    // change to dark or light
    changeBackground = () => {
      const root = document.querySelector('#root')
      if(this.state.isdark) {
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
      }
    }

    changeBtn = () => {
      const dark = !this.state.isdark
      this.changeBackground()
      this.setState({isdark: dark})
    }

    appearNavbar = (event) => {
      const mouseX = event.clientX
      if(mouseX <= 200) {
        this.setState({isAppear: true})
      } else {
        this.setState({isAppear: false})
      }
    }
  
    render() {
      return (
        <Router>
          <div className='app' onMouseMove={this.appearNavbar}>
            <Navbar isAppear={this.state.isAppear} />
            <Prompt message='Are you sure you want to leave?' />
            <aside className='welcome'>
              <h1>Welcome to Learning 30 days</h1>
            </aside>
            {/* exact giúp component không chuyển hướng sang trang khác */}
            <Switch>
              <Route exact path='/ExDay5' component={ExDay5}/> 
              <Route exact path='/ExDay6' component={ExDay6}/>
              <Route exact path='/ExDay7' component={() => <ExDay7 isdark={this.state.isdark} onClick={this.changeBtn} />}/>
              <Route exact path='/ExDay8' component={ExDay8}/>
              <Route exact path='/ExDay16' component={ExDay16}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      )
    }
}
  
export default App
  