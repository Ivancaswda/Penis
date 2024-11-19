/*     const [showLogin, setShowLogin] = useState(false)  СОЗДАЕМ ИЗНАЧАЛЬНО ДВЕ ФУНКЦИИ



    return (


<>
    {showLogin?<LoginPopup setShowLogin={setShowLogin()}/>:<></>} ВЫПУСКАЕМ ЕЕ В ЛОГИНПОПАП ЕСЛИ ТРУ ЕСЛИ ФОЛС ТО НИЧЕГО
            <div className='app'>
                <Navbar setShowLogin={setShowLogin}/> ДОБАВЛЯЕМ В НАВБАР ОБЪЕКТ
                */


import React, {useContext, useEffect, useState} from "react";
import Navbar from "./componets/Navbar/Navbar.jsx";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import Modal from "./componets/Modal/Modal.jsx";

import {LeftDoorModal} from "./componets/LeftDoorModal/LeftDoorModal.jsx";
import LeftDoor from "./componets/LeftDoor/LeftDoor.jsx";
import {Router} from "react-router-dom";
import LoginPopup from "./componets/LoginPopup/LoginPopup.jsx";

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [showDoorModal, setShowDoorModal] = useState(false)
    const isAuthenticated = false
    const [isLoading, setIsLoading] = useState(true); // Начальное состояние загрузки

    useEffect(() => {
        // Симуляция глобальной загрузки (например, данных приложения)
        const loadAppData = async () => {
            setIsLoading(true);
            // Задержка для имитации загрузки данных (замените на реальную загрузку данных, если есть)
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false); // После загрузки данных убираем индикатор загрузки
        };

        loadAppData();
    }, []);


    return (


        <>





            {showModal && (
                <Modal handleCloseModal={() => {
                setShowModal(false)
            }}>
            <LoginPopup handleCloseModal={() => {
                setShowModal(false)
            }}/>
        </Modal>)}


            { isLoading ? (
                 <div style={{
                    fontSize: '40px',
                    width: '100%',
                    height: '100vh',
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


                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-truck" viewBox="0 0 16 16">
                                <path
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                            <h1 style={{fontSize: '30px'}}>Vaz<span style={{fontSize: '30px'}}>on</span></h1>

                        </div>
                        <div style={{
                            height: '11px',
                            width: '200px',
                            border: '2px solid blue',
                            borderRadius: '12px',
                            marginTop: '30px',
                            justifyContent: 'space-around',
                            display: 'flex',
                            alignItems: 'center',

                        }}>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>
                            <div style={{background: 'blue', width: '10%', height: '100%', borderRadius: '12px'}}></div>

                        </div>
                    </div>
                 </div>
            ) : (
                <div className='app'>


                    <Navbar isLoading={isLoading} searchValue={searchValue} setSearchValue={setSearchValue}
                            isAuthenticated={isAuthenticated} setShowDoorModal={setShowDoorModal} setShowModal={setShowModal}/>
                { showDoorModal && (<LeftDoorModal handleCloseDoorModal={() => { setShowDoorModal(false)}} >
                    <LeftDoor/>
                                    </LeftDoorModal>)}



                <Routes>

                    <Route path='/' element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order' element={<PlaceOrder/>}/>
                </Routes>





            <Footer/>
            </div>
                )}
        </>
    )

}

export default App