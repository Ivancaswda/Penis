/* СОЗДАЕМ ПОСЛЕДУЮЩИЙ ПОСЛЕ ОФОРМЛЕНИЯ ЧЕК ЗАКАЗА И ТД
*
* import React, {useContext, useState} from "react";
import './PlaceOrder.css'
import {StoreContext} from "../../context/StoreContext.jsx";

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)  ДЕЛАЛАЕМ ЧТОБЫ ФУНКЦИЯ СЧИТАНИЯ ДЕЙТСВОВАЛА ТУТ ТОЖЕ
    return (

        <form className='place-order'>
            <div className='place-order-left'>  СОЗДАЕМ БЛАНКИ В ЛЕВЫЙ КОНТЕЙНЕР

                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type="text" placeholder='first name'/>
                    <input type="text" placeholder='last name'/>
                </div>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Street'/>

                <div className='multi-fields'>
                    <input type="text" placeholder='City'/>
                    <input type="text" placeholder='State'/>
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code'/>
                    <input type="text" placeholder='Country'/>
                </div>
                <input type="text" placeholder='Phone'/>

            </div>
            <div className='place-order-right'> КОПИРУЕМ ИЗ КАРТА ТАКУЮ ЖЕ БЛАНКУ ДЛЯ ОПЛАТЫ
                <div className='cart-total'>
                    <h2>Cart Totals</h2>


                    <div>
                        <div className='cart-total-details'>

                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p> ВСТАВЛЯЕМ ЧТО ВСЕ ПОЛУЧИЛОСЬ
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2.71}</p> ВЫВОДИМ 2.71 ЕСЛИ БОЛЬШЕ НУЛЯ А ЕСЛИ НОЛЬ ТО НОЛЬ
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <b>Total</b>
                            <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2.71}</b> ПРИБАВЛЯЕМ 2.71 ЕСЛИ БОЛЬШЕ НУЛЯ А ЕСЛИ НОЛЬ ТО НОЛЬ
                        </div>


                    </div>


                    <button>PROCEED TO PayPal</button>
                </div>
            </div>


        </form>
    )
}

export default PlaceOrder*/



import React, {useContext, useState} from "react";
import './PlaceOrder.css'
import {StoreContext} from "../../context/StoreContext.jsx";

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
    return (

        <form className='place-order'>
            <div className='place-order-left'>

                <p className='title'>Информация доставки</p>
                <div className='multi-fields'>
                    <input type="text" placeholder='first name'/>
                    <input type="text" placeholder='last name'/>
                </div>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Улица'/>

                <div className='multi-fields'>
                    <input type="text" placeholder='Город'/>
                    <input type="text" placeholder='Область'/>
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code'/>
                    <input type="text" placeholder='Страна'/>
                </div>
                <input type="text" placeholder='Номер телефона'/>

            </div>
            <div className='place-order-right'>
                <div className='cart-total'>
                    <h2>Стоимость заказа</h2>


                    <div>
                        <div className='cart-total-details'>

                            <p>Стоимость:</p>
                            <p>${getTotalCartAmount()}₽</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <p>Доставка:</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2.71}₽</p>
                        </div>
                        <hr/>
                        <div className='cart-total-details'>

                            <b>Всего:</b>
                            <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2.71}₽</b>
                        </div>


                    </div>


                    <button style={{background: '#0a56e4'}}>Оплатить по PayPal</button>
                </div>
            </div>


        </form>
    )
}

export default PlaceOrder