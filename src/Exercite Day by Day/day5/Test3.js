import React from 'react'
import HongNhung from'../img/Hồng_Nhung.jpeg'

const HeaderTest3 = (props) => {
    const {data} = props
    const {
      fullName,
      duty,
    } = data
    return (
      <header className='header-test-3'>
        <div className='cover-img'>
          <img className='img-hong-nhung' src={HongNhung} alt='Hồng Nhung'></img>
        </div>
        <aside className='name'>
          <div className='fullname'>
            <h2>{fullName}</h2>
            <i className="fas fa-check-circle"></i>
          </div>
          <p>{duty}</p>
        </aside>
      </header>
    )
  }
  const MainTest3 = () => {
    return (
      <main className='main-test-3'>
        <h2 className='skill-header'>Skill</h2>
          <ul className='skills'>
            <li>HTML</li><li>Css</li><li>Sass</li><li>JS</li><li>React</li><li>Redux</li><li>Node</li><li>MongoDB</li><li>Python</li><li>Flask</li><li>Django</li><li>NumPy</li><li>Pandas</li><li>Data Analysis</li><li>MYSQR</li><li>GraphQL</li><li>D3.js</li><li>Git</li>
          </ul>
      </main>
    )
  }
  const FooterTest3 = ({data}) => {
    const {
      join,
    } = data
    return (
      <footer className='footer-test-3'>
        <i className="far fa-clock"></i>
        <p>{join}</p>
      </footer>
    )
  }
  
  const Test3 = () => {
    const data = {
      fullName: 'Hồng Nhung - 2003',
      duty: 'Senior Developer, Finland',
      join: 'Joined on September 1, 2021.'
    }
    return (
    <div className='test-3'>
      <div className='test-3--cover'>
        <HeaderTest3 data={data}/>
        <MainTest3 />
        <FooterTest3 data={data}/>
      </div>
    </div>)
}

export default Test3