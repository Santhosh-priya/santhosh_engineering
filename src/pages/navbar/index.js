import React from 'react'
import style from './navbar.module.sass'
import logo from '..//..//images/navlogo.png'

const navbar = () => {
  return (
    <div>

        
         <div className={style.navbar}>
        <div>
            <img src={logo} alt="" className={style.logoimg}/>
        </div>
        <div className={style.navright}>
            <div>HOME</div>
            <div>OUR PROJECTS</div>
            <div>PROPERTY MANAGEMENT</div>
            <div>ABOUT US</div>
            <button>CONTACTS</button>
        </div>
        </div>
        
        
        
















        
      
    </div>
  )
}

export default navbar
