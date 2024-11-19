/*             {!itemCount? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>:<div className='food-item-counter'>
ЕСЛИ СЧЕТ НЕ БУДЕТ ТО ДОБАВЛЯЕТСЯ КАРТИНКА + И ПРИБАВЛЯЕТСЯ +1 А ЕСЛИ УЖЕ ЕСТЬ ЗНАЧИТ ПОЯВЛЯЕТСЯ ПУСТО ДИВ В КОТОРОМ ПЛЮС И МИНУС И ИМ ДЕЛАЕМ ФУНКЦИЮ ПРЕД +1 СООТ ДЛЯ ПЛЮСА
И ПРЕД. -1 СООТ ДЛЯ МИНУСА
                    <img onClick={()=> addToCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{itemCount}</p>
                    <img onClick={()=> removeFromCart(id)} src={assets.add_icon_green} alt=""/>
</div>
                }     */


import  { useEffect, useRef, useState} from "react";
import './FoodItem.css'



/*             {!itemCount? <img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>:<div className='food-item-counter'>
ЕСЛИ СЧЕТ НЕ БУДЕТ ТО ДОБАВЛЯЕТСЯ КАРТИНКА + И ПРИБАВЛЯЕТСЯ +1 А ЕСЛИ УЖЕ ЕСТЬ ЗНАЧИТ ПОЯВЛЯЕТСЯ ПУСТО ДИВ В КОТОРОМ ПЛЮС И МИНУС И ИМ ДЕЛАЕМ ФУНКЦИЮ ПРЕД +1 СООТ ДЛЯ ПЛЮСА
И ПРЕД. -1 СООТ ДЛЯ МИНУСА
                    <img onClick={()=> addToCart(id)} src={assets.remove_icon_red} alt=""/>
                    <p>{itemCount}</p>
                    <img onClick={()=> removeFromCart(id)} src={assets.add_icon_green} alt=""/>
</div>
                }     */


import React, {useContext} from "react";
import './FoodItem.css'
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";


const FoodItem = ({id, name, price, description, image}) => {

    const [isLoading, setIsLoading] = useState(true); // Изначально показываем индикатор загрузки

    const handleImageLoad = () => {
        setIsLoading(false); // Скрываем индикатор загрузки, когда изображение загружено
    };

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)


    return (

        <div className='food-item'  >
            <div className="food-item-img-container">
                {isLoading && <div style={{
                    fontSize: '40px',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    <div className='logo-div-cafe' style={{    display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>


                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-truck" viewBox="0 0 16 16">
                                <path
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                            <h1 style={{fontSize: '20px'}}>Vaz<span style={{fontSize: '20px'}}>on</span></h1>

                        </div>
                        <p style={{fontSize: '12px'}}>Загрузка...</p>
                    </div>
                </div>}
                <img src={image} style={{display: isLoading ? 'none' : 'block'}} onLoad={handleImageLoad} className='food-item-image' alt=""/>
                {!cartItems[id] ?
                    <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=""/> :
                    <div className='food-item-counter'>

                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt=""/>
                    </div>


                }
            </div>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>



        </div>
    )
}

export default FoodItem