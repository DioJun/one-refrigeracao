import logo from './headerImg/onelogo.png'
import './Header.css'

export const Header = () => {
  return (
    <div className='container'>

      <div className='img'>
        <img src={logo} alt="Logo" className='imgLogo'/>
      </div>
      
    </div>
  )
}