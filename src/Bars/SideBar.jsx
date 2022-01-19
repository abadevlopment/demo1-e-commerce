import React from 'react'
import ReactTooltip from 'react-tooltip'
import './SideBar.scss'

const SideBar = () => {
    return (
        <div className='sidebar' >
            <div className='sidebarLogo' >
                <button type='button' className='sideButton' >
                    e
                </button>
            </div>
            <div className='sidebarButtons' >
                <button type='button' className='sideButton'
                data-tip data-for='homeTool'>
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370034/ABA/ICONS%2032PX/home-02_s3w7gg.svg'
                    alt='home-icon' />
                </button>
                <ReactTooltip id='homeTool' className='tool'
                    place='right'
                    type='light'
                    effect='solid'
                >Inicio</ReactTooltip>
                <button type='button' className='sideButton' id='sideSearch'
                data-tip data-for='searchTool'>
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370037/ABA/ICONS%2032PX/search-70_jnrma3.svg'
                    alt='search-icon' />
                </button>
                <ReactTooltip id='searchTool' className='tool'
                    place='right'
                    type='light'
                    effect='solid'
                >Busqueda</ReactTooltip>
                <button type='button' className='sideButton'
                data-tip data-for='categoryTool'>
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642372041/ABA/ICONS%2032PX/category-09_zp6dj2.svg'
                    alt='category-icon' />
                </button>
                <ReactTooltip id='categoryTool' className='tool'
                    place='right'
                    type='light'
                    effect='solid'
                >Categorias</ReactTooltip>
                <button type='button' className='sideButton'
                data-tip data-for='deliveyTool' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370031/ABA/ICONS%2032PX/delivery-22_qt9s4q.svg'
                    alt='delivery-icon' />
                </button>
                <ReactTooltip id='deliveyTool' className='tool'
                    place='right'
                    type='light'
                    effect='solid'
                >Delivery</ReactTooltip>
                <button type='button' className='sideButton'
                data-tip data-for='contactTool' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370030/ABA/ICONS%2032PX/contact-06_nv9mpx.svg'
                    alt='contact-icon' />
                </button>
                <ReactTooltip id='contactTool' className='tool'
                    place='right'
                    type='light'
                    effect='solid'
                >Contacto</ReactTooltip>
            </div>
            <div className='sidebarConfig' >
                <button type='button' className='sideButton' >
                    <img className='sideImg'
                    src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642372343/ABA/ICONS%2032PX/config-74_jz02dd.svg'
                    alt='config-icon' />
                </button>
            </div>
            <div className='sidebarInfo' >
                <button type='button' className='sideButton' >
                    INFO
                </button>
            </div>
        </div>
    )
}

export default SideBar
