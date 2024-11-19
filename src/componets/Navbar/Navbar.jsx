/*
* const Navbar = ({setShowLogin}) ВСТАВЛЯЕМ ФУНКЦИЮ В НАВИГ БАР
* <button onClick={()=> setShowLogin(true)}>Sign in</button> ДОБАВЛЯЕМ ФУНКЦИЮ КООГДА НАЖИМАЕМ ДЛЯ ТОГО ЧТОБЫ ВОЙТИ ОНА ВЫВОДИТСЯ
*
*
*   <div className='navbar-right'>
    const [menu, setMenu] = useState('Home') ДАЕМ ЭТОТ ФУНКЦИИ ПАРАМЕТР ХОУМ
    const {getTotalCartAmount} = useContext(StoreContext) ИСПОЛЬЗУЕМ ФУНКЦИЮ КОТОРУЮ СОЗДАЛИ В СТОР КОНТЕКСТЕ
*
                <img src={assets.search_icon} alt=""/>
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div> ЕСЛИ В КОРЗИНЕ НИЧЕГО НЕТ ТО НЕ БУДЕТ ТОЧКИ НАД СУМКОЙ А ЕСЛИ ЕСТЬ ТО БУДЕТ
                    * ФУНКЦИЮ ВЗЯЛИ ИЗ СТОР КОНТЕКСТ
                </div>
                <button onClick={()=> setShowLogin(true)}>Sign in</button> ПОКАЗЫВАЕМ ФУНКЦИЮ ШОУЛОГИН И СТАВИМ ЕЙ ТРУ ТО ЕСТЬ ОНА ВЫВОДИТСЯ
            </div>*/

import React, {useContext, useState} from "react";
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.jsx";
import {useAuth} from "../../context/AuthContext.jsx";


const Navbar = ({setShowModal, setShowDoorModal, isAuthenticated, setSearchValue, searchValue, isLoading}) => {
    const [menu, setMenu] = useState('Home')
    const {getTotalCartAmount} = useContext(StoreContext)
    const {globalUser, logout} = useAuth()

    const [visibleInput, setVisibleInput] = useState(false)



    return (

        <div className='navbar' >





            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>


            <div className='burger-button' onClick={() => {
                setShowDoorModal(true)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-list"
                     viewBox="0 0 16 16">
                    <path
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <Link to='/'>
                <div className='logo-div-cafe'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-truck" viewBox="0 0 16 16">
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                    </svg>
                    <h1 >Vaz<span >on</span></h1>
                </div>
            </Link>
            </div>
            <ul id='lox' className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("Home")} className={menu === 'Home' ? 'active' : ""}>Главная страница</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")}
                   className={menu === 'menu' ? 'active' : ""}>Меню</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")}
                   className={menu === 'mobile-app' ? 'active' : ""}>mobile-app</a>

                {!visibleInput &&(<a href='#footer' onClick={() => setMenu("contact us")}
                    className={menu === 'contact us' ? 'active' : ""}>Контакты</a>)}

            </ul>
            <div className='navbar-right'>
                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>









                {globalUser && (<div
                    className='navbar-search-icon'>
                <Link

                        to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>)}
                </div>
                { globalUser ? (
                    <button style={{display: 'flex', alignItems: 'center', gap: '5px'}} className='sign-btn' onClick={logout}>

                        <p>Выйти</p>
                        <svg width='16px' height='16px' style={{color: 'grey'}} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path  style={{color: 'grey'}}
                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
                        </svg>
                    </button>
                ) : (
                    <button style={{display: 'flex', alignItems: 'center', gap: '5px'}} className='sign-btn' onClick={() => setShowModal(true)}>
                        <svg width='16px' height='16px' style={{color: 'grey'}} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path style={{color: 'grey'}}
                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                        </svg>
                        <p>Войти</p></button>
                )}
            </div>


        </div>

    )
}

export default Navbar