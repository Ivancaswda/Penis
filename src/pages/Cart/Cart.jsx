/*
* import React, {useContext} from "react";
import './Cart.css'
import {StoreContext} from "../../context/StoreContext.jsx";


const Cart = () => {
*
    const {cartItems, food_list, removeFromCart} = useContext(StoreContext)  ДОБАВЛЯЕМ ФУНКЦИИ ИЗ ФАЛЙОА СТОР КОНТЕКСТ С ИХ СВОСТВАМИ
    * const navigate = useNavigate() СОЗДАЕМ ФУНКЦИЮ ДЛЯ НАВИГАЦИИ (ДОБАВИЛ И ЗНАЧЕНИЕ В КНОПКУ)
    *
    *
    return (

        <div className='cart' >
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>


            <br/>
            <hr/>

                {food_list.map((item, index)=>{  ВСЕГДА СОЗДАЕМ КОГДА НУЖНО СДЕЛАТЬ КАЖДЫЙ ЭЛЕМЕНТ И ДОБАВЛЯЕМ АЙТЕМ И ИНДЕКС


                        if (cartItems[item._id]>0) { ЕСЛИ БОЛЬШЕ НУЛЯ КОЛ-ВО ТОВАРОВ ЗНАЧИТ ВЫСВЕЧИВАЕМ НА СТРАНИЦЕ
                            return (


                                <div>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="image"/> ПРИСВАВАЕМ КАРТИНКУ
                                    <p>{item.name}</p> ПРИСВАВАЕМ ИМЯ
                                    <p>{item.price}</p> ПРИСВАВАЕМ ЦЕНУ
                                    <p>{cartItems[item._id]}</p> ПРИСВАВАЕМ СКОЛЬКО ВСЕГО
                                    <p>{item.price*cartItems[item._id]}</p> ЦЕНУ УМНОЖАЕМ НА КОЛВО ПОЛУЧАЕМ СУММУ ВСЕГО ПАКА ЕДЫ
                                    <p onClick={() => removeFromCart(item._id) } className='cross'>x</p> СОЗДАЕМ ЧТОБЫ МОЖНО БЫЛО УДАЛИТЬ


                                </div>
                                    <hr/>
                                </div>

                            )
                        }


                })}


            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>

                            <p>Subtotal</p>
                            <p>{0}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <b>Total</b>
                            <b>{0}</b>
                        </div>


                    </div>
                     <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button> ДЛЯ ТОГО ЧТОБЫ ПЕРЕЙТИ ЗАТЕМ ПО ЭТОЙ КНОПКЕ НА ПОДСАЙТ ЗАКАЗ
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>if you have promocode enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart*/





import React, {useContext, useState} from "react";
import './Cart.css'
import {StoreContext} from "../../context/StoreContext.jsx";
import {useNavigate} from "react-router-dom";


const Cart = () => {
    const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate()

        const {inpPromo, setInpPromo} = useState()



    return (

        <div className='cart' >
            <div  className='cart-items'>
                <div className='cart-items-title'>
                    <p>Блюда</p>
                    <p>Название</p>
                    <p>Цена</p>
                    <p>Колво</p>
                    <p>Всего</p>
                    <p>Удалить</p>
                </div>


            <br/>
            <hr/>

                {food_list.map((item, index)=>{





















                        if (cartItems[item._id]>0) {



                            return (


                                <div>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt="image"/>
                                        <p>{item.name}</p>
                                        <p>{item.price}₽</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>{item.price * cartItems[item._id]}₽</p>
                                        <p style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'left',
                                            marginLeft: '5px'
                                        }} onClick={() => removeFromCart(item._id)} className='cross'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </p>


                                </div>
                                    <hr/>
                                </div>

                            )
                        }


                })}


            </div>

            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Сумма заказа</h2>


                    <div>
                    <div className='cart-total-details'>



                                    <p>Стоимость:</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr/>
                                <div className='cart-total-details'>

                                    <p>Доставка:</p>
                                    <p>${getTotalCartAmount()===0?0:2.71}₽</p>
                                </div>
                                <hr/>
                                <div className='cart-total-details'>

                                    <b>Всего:</b>
                                    <b> {getTotalCartAmount() ===0?0:getTotalCartAmount() + 2.71}₽</b>
                                </div>


                            </div>




                    <button style={{background: '#0a56e4'}} onClick={()=> navigate('/order')}>Перейти к заполнению</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>Если имеется промокод Vazon то набери здесь</p>
                        <div className='cart-promocode-input'>
                            <input value={inpPromo} onClick={(e) => {
                                setInpPromo(e.target.value)
                            }} type="text" placeholder='promo'/>
                            <button  onClick={() => {
                                    inpPromo()
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart