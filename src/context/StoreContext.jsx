/* import {createContext,  useState} from "react";
import {food_list} from "../assets/assets.js";

export  const  StoreContext = createContext(null);

const StoreContextProvider = (props) => {  СОЗДАЕМ ЧТОБЫ ОПРЕДЕЛИТЬ КАКОЙ ИМЕННО ОБЪЕКТ УВЕЛИЧИТЬ ИЛИ УМЕНЬШИТЬ СМОТРЕТЬ В РЕТЕРНЕ ТАМ ТОЖЕ ЧИЛДРЕН
    const [cartItems, setCartItems] = useState({}) СОЗДАЕМ НЕКИЕ ФУНКЦИИ

    const addToCart = (itemId) => {  СОЗДАЕМ ФУНКЦИЮ ЧТОБЫ МОЖНО БЫЛО  УВЕЛИЧИВАТЬ ТОВАРЫ В КОРЗИНЕ ДОБАВЛЯЕМ ПАРАМЕТР АЙТЕМ АЙДИ ЧТО УВВЕЛИЧЬ НУЖНЫЙ
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

        }
    }

    const removeFromCart = (itemId) => {     СОЗДАЕМ ФУНКЦИЮ  УМЕНЬШАТЬ
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {  СОЗАДЕМ ДЛЯ ПОДСЧЕТА ВСЕЙ СТОИМОСТИ
        let totalAmount = 0; ДАЕМ ПАРАМЕТРО НОЛЬ
        for (const item in cartItems) { СОЗДАЕМ ЦИКЛ
            if (cartItems[item]>0) { ЕСЛИ БОЛЬШЕ НУЛЯ  ТО
                let itemInfo = food_list.find((product)=> product._id === item) СОЗАДЕМ ПЕЕРМЕННУЮ ОНА БУДЕТ ОЗНАЧАТЬ СУММА ОДНО ТИПА ЕДЫ
                totalAmount += itemInfo.price* cartItems[item] ВЫЧЕСЛЯЕМ ВСЕ
            }

        }
        return totalAmount; ВОЗВРАЩАЕМ ФУНКЦИЮ

    }



    const contextValue = { ВНОСИМ ВСЕ ИСПОЛЬЗУЕМЫЕ ФУНКЦИИ

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    }

    return (
        <StoreContext.Provider value={contextValue} > СОЗДАЕМ ЦЕНА ДЛЯ КОНТЕКСТА

            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider*/


import {createContext,  useState} from "react";
import {food_list} from "../assets/assets.js";
import {  useEffect, useContext} from "react";
import {auth, db} from "../../firebase.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'


export  const  StoreContext = createContext(null);

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}








const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})




    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price* cartItems[item]
            }

        }
        return totalAmount;

    }



    const contextValue = {

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,


    }





    return (



        <StoreContext.Provider value={contextValue} >

            {props.children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider