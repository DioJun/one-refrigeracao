import logo from './headerImg/onelogo2.png'
import './Header.css'

export const Header = () => {
  return (
    <div className='container'>

      <div className='img'>
        <img src={logo} alt="Logo" className='imgLogo'/>
      </div>

      <div className='text'>
        <h1>
            Assistência Técnica em Refrigeração e Climatização
        </h1>
      </div>
      
    </div>
  )
}