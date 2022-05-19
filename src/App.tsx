import logo from './images/logo.svg'
import instagram from './images/instagram.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import ilustration from './images/illustration-dashboard.png'
import './App.css'
import { TextInput } from './components/TextInput'

function App() {

  return (
    <main className="App">
      <img src={logo} alt="logo" className='logo'/>
      <h1 className='top__header'>We are launching   <span className='top__strong'>soon!</span></h1>
      <p className='top__text'>Subscribe and get notified</p>
      <TextInput/>
      <img src={ilustration} alt="ilustration" className="ilutration" />
      <div className="social__container">
        <img src={facebook} alt="facebook" className="social__icon" />
        <img src={twitter} alt="twitter" className="social__icon" />
        <img src={instagram} alt="instagram" className="social__icon" />
      </div>
      <footer>
        <span className="footer_span">© Copyright Ping. All rights reserved.</span>
      </footer>
    </main>
  )
}

export default App
