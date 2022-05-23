import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarMenu } from './NavbarMenu'
import { SocialMedia } from './SocialMedia'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(null);
    const [windowScroll, setWindowScroll] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 990) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollCheck = window.scrollY < 80;
            if(scrollCheck !== windowScroll){
                setWindowScroll(scrollCheck);
            }
        })
    })

    return (
        <header className={!windowScroll ? 'active' : ''}>
            <div className='container-fluid'>
                <nav className="nav">
                    <div className='brand-logo'>
                        <Link to="/">Auburn</Link>
                    </div>
                    {setScreenSize && (
                        <div className="toggleMenu" onClick={() => setActiveMenu(!activeMenu)}>
                            {!activeMenu ? <BiMenuAltLeft /> : <AiOutlineClose />}
                        </div>
                    )}
                    {activeMenu && (
                        <div className='navbar'>
                            <NavbarMenu />
                            <SocialMedia />
                        </div>
                    )
                    }

                </nav>
            </div>
        </header>
    )
}
