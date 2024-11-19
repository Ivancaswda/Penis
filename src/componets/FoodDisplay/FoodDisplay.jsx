/*        {food_list.map((item, index)=>{
                    if (category==='All' || category===item.category){   ПЕРЕД ТЕМ МЫ ВСЕ ЗНАЧЕНЕ МЕНЯЕМ НА АЙДИ И ТЕПЕРЬ ЕСЛИ КАТЕГОРИЯ РАВНА ВСЯ ТО ВЫВОДИМ ВСЮ ЕСЛИ НЕТ ТО ПО КАТЕГОРИИ
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}  />
                    }
                    })}*/



import React, {useContext, useState} from "react";
import './FoodDisplay.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";
import {food_list} from "../../assets/assets.js";

const FoodDisplay = ({category, searchValue, setSearchValue}) => {


    const {food_list } = useContext(StoreContext)
    const filteredFoodList = food_list.filter((element) => {
        if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false
    })
    return (

        <div className='food-display' id='food-display' >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>


                <h2>Наше меню:</h2>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>



                <input placeholder='🔍 Введите название блюда...'  value={searchValue} onChange={(event) => {
                    setSearchValue(event.target.value)
                }} className='navbar-input-search' type="text"/>

                </div>
            </div>
            <div className='food-display-list'>
                {filteredFoodList.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                                         image={item.image} price={item.price}/>
                    }
                })}

            </div>


        </div>
    )
}

export default FoodDisplay