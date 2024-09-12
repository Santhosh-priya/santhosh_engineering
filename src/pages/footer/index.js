import React from 'react'
import style from './footer.module.sass'
import footerimg from '..//..//images/navlogo.png'
const Footer = () => {
  return (
    <div>
        <div className={style.footerimg}>
        <img className={style.footer} src={footerimg} alt='' />
        
        </div>
        <div className={style.footerser}>
            
            <div>Home</div>
            <div>Our Projects</div>
            <div>Property Managment</div>
            <div>About Us</div>  
        </div>
        <div className={style.last}>2024 Santhosh Development Company</div>
        </div>
      
    
  )
}

export default Footer
