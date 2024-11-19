import React  from "react";
import './Footer.css'

import {assets} from "../../assets/assets.js";
import {Link} from "react-router-dom";

const Footer = () => {
    return (

        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='logo-div-cafe'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-truck" viewBox="0 0 16 16">
                            <path
                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                        </svg>
                        <h1 style={{color: 'white'}}>Vaz<span>on</span></h1>
                    </div>
                    <p id='footer-copyright'>Ваша любовь к нашему кафе вдохновляет нас на новые кулинарные идеи и сервис.
                        Присоединяйтесь к нашему сообществу в соцсетях и будьте в курсе всех новинок и акций!
                    </p>
                    <div className="footer-social-icons">
                        <Link rel="noopener noreferrer" target='_blank' to='https://web.telegram.org/'><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 496 512">
                            <path style={{color: 'white'}}
                                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6
                                 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                        </svg></Link>
                       <Link rel="noopener noreferrer" target='_blank' to='https://x.com/'> <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path style={{color: 'white'}}
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
                        </svg></Link>
                        <Link rel="noopener noreferrer" target='_blank' to='https://vk.com/' ><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <path style={{color: 'white'}}
                                d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6
                                346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/>
                        </svg></Link>
                    </div>
                </div>
                <div className="footer-center">
                    <h2>Company</h2>
                    <ul>
                        <Link rel="noopener noreferrer" target='_blank' to='/'>
                        <li>Home</li>
                        </Link>
                        <Link rel="noopener noreferrer" target='_blank' to='/'>


                        <li>Поддержать донатом</li>
                        </Link>
                        <Link rel="noopener noreferrer" target='_blank' to='https://aivanius.netlify.app/'>
                            <li>About</li>
                        </Link>
                        <Link rel="noopener noreferrer" target='_blank' to='https://cgamescafe.com/privacy-policy-en/'
                        ><li>Privacy Policy</li>
                        </Link>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Связаться с нами</h2>
                    <ul>
                        <li>+7-952-163-71-69</li>
                        <li>katkovskiji@gmail.com</li>
                    </ul>


                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright &copy; 2025 Vazon made by <b>Ivan Katkovsky</b></p>


        </div>
    )
}

export default Footer