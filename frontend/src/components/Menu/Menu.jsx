import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category, setCategory}) => {

  return (
    <div className='menuContainer' id='menu'>
      <h1>Explore our menu</h1>
      <p className='menu-text'>Choose from diverse menu featuring a detectable array of dishes. Our mission is to satisfy your cravings and elevate your diningexperience. One delicious meal at a time. </p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{

          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} 
            // correct
            className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              

            </div>
          )
        } )}
      </div>
      <hr />
    </div>
  )
}

export default Menu