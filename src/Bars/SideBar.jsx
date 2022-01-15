import React from 'react'
import './SideBar.scss'

const SideBar = () => {
    return (
        <div className='sidebar' >
            <div className='sidebarLogo' >LOGO</div>
            <div className='sidebarButtons' >
                <button type='button' className='sideButton' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1641962274/ABA/ICONOS%2032%20PX/32_px_blancos-01_m8vfzl.svg'
                    alt='' />
                </button>
                <button type='button' className='sideButton' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1641962274/ABA/ICONOS%2032%20PX/32_px_blancos-01_m8vfzl.svg'
                    alt='' />
                </button>
                <button type='button' className='sideButton' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1641962274/ABA/ICONOS%2032%20PX/32_px_blancos-01_m8vfzl.svg'
                    alt='' />
                </button>
                <button type='button' className='sideButton' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1641962274/ABA/ICONOS%2032%20PX/32_px_blancos-01_m8vfzl.svg'
                    alt='' />
                </button>
            </div>
            <div className='sidebarConfig' >CONFIG</div>
            <div className='sidebarInfo' >INFO</div>
        </div>
    )
}

export default SideBar
