import {Link} from "react-router-dom";
import React, {useState} from "react";

import './LeftDoor.css'
export default function LeftDoor() {
    const [menu, setMenu] = useState('Home')

    return (
        <>
            <div className='left-door-component-class'>
                <div style={{padding: '20px', height: '100%'}}>
                    <Link to='/'>
                        <div className='logo-div-cafe'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-truck" viewBox="0 0 16 16">
                                <path
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                            <h1 style={{display: 'flex', alignItems: 'start', gap: '1px'}}>Vaz<span>on</span><p style={{fontSize: '9px'}}>door</p></h1>
                        </div>
                    </Link>

                    <div className='second-part-of-door-container'>

                    <ul className='navbar-menu' style={{display: 'flex', flexDirection: 'column',
                        alignItems: 'start', justifyContent: 'center', marginTop: '30%'}}>
                        <a href='#header' onClick={() => setMenu("Home")} className={menu === 'Home' ? 'active' : ""}
                        >Главная страница</a>
                        <a href='#explore-menu' onClick={() => setMenu("menu")}
                           className={menu === 'menu' ? 'active' : ""}>Меню</a>
                        <a href='#app-download' onClick={() => setMenu("mobile-app")}
                           className={menu === 'mobile-app' ? 'active' : ""}>mobile-app</a>
                        <a href='#footer' onClick={() => setMenu("contact us")}
                           className={menu === 'contact us' ? 'active' : ""}>Контакты</a>

                    </ul>
                        <div style={{marginTop: 'auto'}} className=''>
                            <div>
                                <h1 style={{fontSize: '12px', textAlign: 'center', marginBottom: '20%'}}>Спасибо за вашу поддержку!</h1>
                            </div>
                            <div className='grid-door-footer-container'>

                                    <Link to='https://aivanius.netlify.app/' rel="noopener noreferrer"><p>Помощь</p></Link>
                                    <Link to='https://aivanius.netlify.app/' rel="noopener noreferrer"><p>Создатель</p></Link>
                                    <Link to='https://aivanius.netlify.app/' rel="noopener noreferrer"><p>История</p></Link>
                                    <p onClick={() => {
                                        alert('У нас нету сервисов :(')
                                    }}>Сервисы</p>
                                    <Link to='https://cgamescafe.com/privacy-policy-en/' rel="noopener noreferrer"><p >Политика</p></Link>
                                <Link to='https://www.donationalerts.com/r/aivanius' rel="noopener noreferrer"><p >Поддержать проект</p></Link>


                            </div>
                            <div style={{marginBottom: '15px'}}>
                                <h1 style={{fontSize: '9px', textAlign: 'center', color: 'grey'}}>Copyright &copy; 2025 made by Ivan Katkovsky</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
            }