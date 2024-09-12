import React from 'react'
import style from './homepage.module.sass'
import img1 from '..//..//images/img2.jfif'
import { BsBuildings } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import hall from '..//..//images/hall img.jfif'
import hallimg2 from '..//..//images/hall img2.jfif'
import cardimg1 from '..//..//images/card img1.jfif'
import { MdHome } from "react-icons/md";
import { SiCodesignal } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { ImageOutlined } from '@mui/icons-material';
import cardimg2 from '..//..//images/cardimg2.jfif'
import cardimg3 from '..//..//images/cardimg3.jfif'

// import home from '../../images/nav img 1.jfif'
const Homepage = () => {



const box1 = [

{
  icon:  <BsBuildings />,
  name:    "Office",
},
{
  icon:  <FaHouseChimney/>,
  name:    "Retail",
},
{
  icon:  <BsFillBuildingsFill />,
  name:    "Warehouse",
},
{
  icon:  <MdFamilyRestroom  />,
  name:    "Multi-Family",
},
{
  icon:  <FaHome/>,
  name:    "Homes",
},
]

const card =[
  {
    img: cardimg1,
    icons:<MdHome />,
    para:" Property Selection",
    subpara:" Duis sed odio sit amet nibh vulputate cursus a sit amet mauris"

  },
  {
    img: cardimg2,
    icons:<SiCodesignal />,
    para:" Design Build",
    subpara:" Duis sed odio sit amet nibh vulputate cursus a sit amet mauris"

  },
  {
    img: cardimg3,
    icons:<SiAntdesign  />,
    para:" Lease Back ",
    subpara:" Duis sed odio sit amet nibh vulputate cursus a sit amet mauris"

  }







]



  return (
    <div>


        <div className={style.homepage}>


          <div className={style.homeletter}>
            <div className={style.homeletter2}>Our Customers are </div>
            <div className={style.homeletter3} >Residential & Commercial Tenants</div>
              <div className={style.para}>Safety measures and compliance with local regulations are crucial in construction work to protect workers and ensure the integrity of the structures. Equipment like bulldozers, cranes, and specialized tools are often used to complete tasks efficiently. Do you need information on a specific aspect of construction?




</div>
              <button className={style.button}>Learn More</button>

            </div>

             </div>

<div className={style.home1}>

  <p className={style.para1}>
    What we offer
  </p>
  <p className={style.para2}>
    What Types of construction we offer
  </p>



<div className={style.boxes}>
{box1.map((x,index) =>(


  <div key={index} className={style.box1}>
  
    <div className={style.icon}>
   {x.icon}
    </div>
    <div className={style.iconhead}>
{x.name}
    </div>
    

  </div>

  





)  )}


</div>
</div>

<div className={style.hall1}>
<img src={hall} alt=""className={style.hall}/>
<div className={style.fistbox}>
  <div className={style.about}>ABOUT US</div>
  <div className={style.company}>Santhosh Development Company</div>
  <div className={style.contant}>santhosh Development Company specializes in several areas of Real Estate including Class-A Office, Single-Tenant Retail, Specialty Warehouse, and Multifamily Apartment Communities. We work with our Tenant Partners to provide turnkey solutions to their space requirements.</div>
  <div className={style.contant}> We have created an experience-based, relationship-driven full-service development firm that can guide you through the challenges and complex process of development. From site selection, design, approvals, building, and leasing – all under one roof</div>
  <button className={style.greenbutton}>Learn More</button>
  </div>
</div>



<div className={style.hall1}>
<div className={style.fistbox}>
  <div className={style.about}>WHAT WE DO</div>
  <div className={style.company}>Santhosh Development Services</div>
  <div className={style.contant}>Santhosh development specializes in several areas of Real Estate including Class-A Office, Single-Tenant Retail, Specialty Warehouse, and Multifamily Apartment Communities. We work with our Tenant Partners to provide turnkey solutions to their space requirements.</div>
  <div className={style.contant}> We have created an experience-based, relationship-driven full-service development firm that can guide you through the challenges and complex process of development. From site selection, design, approvals, building, and leasing – all under one roof</div>
  <button className={style.greenbutton}>Learn More</button>
  </div>

<img src={hallimg2} alt=""className={style.hall}/>

</div>


<div className={style.cards}>

{card.map((x,index)=>(

<div key={index} className={style.holecard}>
    
  <div >
    <img src={x.img} alt="" className={style.cardimg1}/>
  </div>
<div className={style.icons1}>  <div className={style.icons}>{x.icons} </div></div>
  <div className={style.cardpara1}>{x.para}</div>
  <div className={style.cardpara2}>{x.subpara}</div>



</div>

))}

</div>




















             {/* <div>
              <div>
                <img src={img1} alt="" className={style.img1}/>
              </div>
            </div>
            <div>
              <div>About Us</div>
              <div></div>
            </div> */}

      
    </div>
  )
}

export default Homepage

