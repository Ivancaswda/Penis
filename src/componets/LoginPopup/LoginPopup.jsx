/* import React, {useState} from "react";
import './LoginPopup.css'
import {assets} from "../../assets/assets.js";

const LoginPopup = ({setShowLogin}) => { // ДОБАВЛЯЕМ ФУНКЦИЮ КОТОРАЯ ПОКАЗЫВАЕТ БЛАНКУ ЕСЛИ ЧТО ТО НЕ ТАК ТО НЕ ПОКАЗЫВАЕТ СОЗДАЛИ aPP

    const [currState, setCurrState] = useState('Login') Создаем Функции которые выводят сначада логин на появл бланкете

    return (

        <div className='login-popup' >
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt=""/> СОЗДАЕМ КРЕСТИК КОТОРЫЙ ДЕЛАЕТ ФУНКЦИЮ НЕДЕЙСТВ ТО ЕСТЬ ВЫХОДИТ ИЛИ ДЕЛАЕТ НАЗАЛ
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>} ЕСЛИ РАВНО ЛОГИН ТО ПУСТАЯ СТРОКА ЕСЛИ РЕГСТРАЦИЯ ТО ВОТ СЛЕДУЩАЯ

                    <input type="email" placeholder='Email' required/> <br/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>{currState==='Sign Up'?'Create account':'Login'}</button> В ЗАВИСИМОСТИ БУДЕТ ПОКАЗЫВАТЬСЯ ТЕКСТ
                <div className="login-popup-condition">
                    <input type="checkbox" required/> ГАЛОЧКА ВЕРИФ
                    <p>Lorem ipsum dolor sit & amet, consectetur & adipisicing elit. Aut, culpa.</p> УСЛОВИЯ
                </div>
                {currState === 'Login' ? <p>Create new Account || <span onClick={ () =>setCurrState('Sign Up')}>click here</span></p> :   ЕСЛИ РАВНО ЛОГИ СОЗДАТЬ ТО ЗАПРАШИВАЕТ
                  СОЗДАТЬ НОВЫЙ АККАУНТ ЕСЛИ РЕГИСТРАЦИЯ ТО ВОЙТИ И ПО КЛИКАМ ТЕКСТА ВЕРЕВОДИТСЯ В ЛОГИН ИЛИ РЕГИСТРАЦИИ
                    <p>Already Have an account? || <span onClick={() =>setCurrState('Login')}>Login here</span></p>}

            </form>


        </div>
    )
}*/
/*
import LoginPopup from "./componets/LoginPopup/LoginPopup.jsx";import React, {useState} from "react";
import './LoginPopup.css'
import {assets} from "../../assets/assets.js";
import {useAuth} from "../../context/StoreContext.jsx";

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState('Login')
    const [isRegistration, setIsResistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const {signup, login} = useAuth()
    async function handleAuthenticate() {
        if (!email || !email.includes('0') || !password || password.length < 6 || isAuthenticating) {
            return
        }
        try {
            setIsAuthenticating(true)

            if (isRegistration) {
                // register a user
                await signup(email, password)
            } else {
                // login a user
                await login(email, password)
            }
        } catch (err) {
            console.log(err.message)
        } finally {
            setIsAuthenticating(false)
        }
    }


    return (

        <div className='login-popup' >
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt=""/>
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>}

                    <input type="email" placeholder='Email' required/> <br/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button>{isAuthenticating ? 'Authenticating...' : currState==='Sign Up'?'Create account':'Login'}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>Lorem ipsum dolor sit & amet, consectetur & adipisicing elit. Aut, culpa.</p>
                </div>
                {currState === 'Login' ? <p>Create new Account || <span onClick={ () =>setCurrState('Sign Up')}>click here</span></p> :
                    <p>Already Have an account? || <span onClick={() =>setCurrState('Login')}>Login here</span></p>}

            </form>


        </div>
    )
}

export default LoginPopup

 */import { useState } from 'react'
import {assets} from "../../assets/assets.js";
 import './LoginPopup.css'
import { useAuth } from '../../context/AuthContext.jsx'
export default function LoginPopup(props) {
    const { handleCloseModal } = props
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [error, setError] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const { signup, login } = useAuth()

    async function handleAuthenticate() {
        if (!email || !email.includes('@') || !password || password.length < 6 || isAuthenticating) {
            document.getElementById('nothing').textContent = 'Error!! Что-то не так... '
            return
        }
        document.getElementById('nothing').textContent = ''
        try {
            setIsAuthenticating(true)
            setError(null)

            if (isRegistration) {
                // register a user
                if (!confirm) {
                    document.getElementById('confirm').innerText = 'Чтобы продолжить поставьте галочку.'
                    return
                }
                else {
                    document.getElementById('confirm').innerText = ''
                    await signup(email, password)
                }

            } else {
                // login a user


                    await login(email, password)


            }



            handleCloseModal()
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setIsAuthenticating(false)
        }

    }

    return (
        <>
            {/*
            <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
            {error && (
                <p>❌ {error}</p>
            )}
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="********" type="password" />
            <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={() => { setIsRegistration(!isRegistration) }}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
            </div>
            */}

            <div className='login-popup'>
                <div className='login-popup-container'>
                    <div className='login-popup-title'>
                        <h2>{isRegistration ? 'Sign up' : 'Login'}</h2>

                        <img onClick={handleCloseModal} src={assets.cross_icon} alt=""/>
                    </div>
                    <div className='login-popup-inputs'>
                        {error && (

                            <p style={{color: 'red'}}>{error}</p>

                        )}
                        <p id='confirm'></p>
                        <p style={{color: 'red'}} id='nothing'></p>
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} placeholder='Email' required/> <br/>
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} placeholder='Password' required/>
                    </div>

                    { isRegistration && (<div onClick={() => {
                        setConfirm(true)
                    }} className="login-popup-condition" style={{marginTop: '5px'}}>

                        <input className='confirm' onClick={() => {
                            document.querySelector('.confirm').display = 'none'
                        }} type="checkbox" required/>
                        <p>политика Vazon при <span style={{color: 'blue'}}>обработки данных</span> пользователя</p>
                    </div>)}

                    <button style={{background: 'blue'}} onClick={handleAuthenticate}>
                        <p>{isAuthenticating ? 'Устанавливаем...' : 'Submit'}</p>
                    </button>
                    <p>{isRegistration ? 'Уже были у нас?' : 'Создать новый аккаунт'}<span style={{color: 'blue'}}
                                                                                           onClick={() => setIsRegistration(!isRegistration)}>  click here</span>
                    </p>


                </div>


            </div>
        </>
    )
}