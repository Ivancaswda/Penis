import React  from "react";
import './Header.css'

import {useState} from "react";

const Header = () => {


    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false); // Скрываем индикатор загрузки, когда изображение загружено
    };





    return (
        <div>


            <div className='header' id='header'>
                {isLoading && <div style={{
                    fontSize: '40px',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
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

                <img onLoad={handleImageLoad} src="../../../background.jpg"
                     className='img-background' alt="" style={{display: isLoading ? 'none' : 'block'}}/>
                <div style={{display: isLoading ? 'none' : 'flex'}} className="header-contents">
                    <h2>Мы готовим только с нежностью и заботой!</h2>
                    <p>Не жалеем продуктов! Попробуйте наши изысканные блюда по недорогой цене с быстрой доставкой
                        от <b>400
                            рублей</b>.</p>
                    <button><a className='reffer-meny' href='#explore-menu'>Глянуть Меню</a></button>

                </div>


            </div>

        </div>
    )
}

export default Header
