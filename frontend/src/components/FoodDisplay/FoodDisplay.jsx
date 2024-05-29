import React, { useContext } from 'react'
import './FoodDisplay.css'

import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'
//--------------------------------- [import]

const FoodDisplay = ({category}) => {
//----------------------prop--category

    const {food_list} = useContext(StoreContext)
//--------------------[destructure the food-list]
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
  //-------------- [render individual FoodItem]      
          if (category==="All" || category===item.category) {
            return (
            <Fooditem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}/>
          )}
      //------------------- [passing down props]    
        })}
      </div>
    </div>
  )
}

export default FoodDisplay