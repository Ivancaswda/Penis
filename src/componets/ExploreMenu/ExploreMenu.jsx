/*             <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>  ЕСЛИ Я КЛИКАЮ НА ДИВ ЭТОТ ТО ОН ВЫСТАВЛЯЕТСЯ
                            <img className={category===item.menu_name?'active':""} src={item.menu_image} alt=""/> ПРИБАВЛЯЕМ КЛАСС АКТИВ ПОТОМ ОПИСЫВАЕМ ЕГО В CSS И ПОЛУЧАЕТСЯ АНИМАЦИЯ

                        <p>{item.menu_name}</p>
                        </div>*/

import React, {useState} from "react";
import './ExploreMenu.css'
import { menu_list} from "../../assets/assets.js";


const ExploreMenu = ({category, setCategory}) => {





    return (

        <div className='explore-menu' id='explore-menu'>

            <h1>Меню наших блюд</h1>
            <p className='explore-menu-text'>Наша еда не перестаёт вкуснеть на глазах! Быстрее спукаскайтесь и набирайте сколько вам влезет!</p>

            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?'active':""} src={item.menu_image} alt=""/>

                        <p>{item.menu_name}</p>
                        </div>




                    )


                })}


            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu