import React from 'react'
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='navbar' >
            <button type='button' className='navbarName'>
                e-commerce
            </button>
            <div className='navbarButtons'>
                <button type='button' className='navButton'>Inicio</button>
                <button type='button' className='navButton'>Categoria</button>
                <button type='button' className='navButton'>Contacto</button>
            </div>
            <div  className='navbarUser'>
                <button type='button' className='navButtonCart'>
                    <div className='cartQty' >[0]</div>
                    <div className='cartArrow' >
                        <img className='arrowImg'
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370046/ABA/ICONS%2032PX/arrow-55_opprdb.svg'
                        alt='arrow-icon' />
                    </div>
                    <div className='cartIcon' >
                        <img className='iconImg'
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370025/ABA/ICONS%2032PX/cart-10_cg92wl.svg'
                        alt='cart-icon' />
                    </div>
                    <div className='cartPrice' >S/.0.00</div>
                </button>
                <button type='button' className='navButtonUser'>
                    <div className='userAvatar' >
                        <img className='avaImg'
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370044/ABA/ICONS%2032PX/user-30_irhkjl.svg'
                        alt='user-icon' />
                    </div>
                    <div className='userName' >
                        Iniciar Sesión
                    </div>
                    <div className='userNoti'>
                        <img className='notImg'
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370019/ABA/ICONS%2032PX/bell-38_xwnewr.svg'
                        alt='notification-icon' />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavBar
