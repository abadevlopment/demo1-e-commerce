import React from 'react'
import Ad from '../Ads/Ad'
import './MainSection.scss'


const MainSection = () => {
    return (
        <div className='mainSection' >
            <div className='mainBrands' >
                <button type='button' className='brandButton'>MARCA</button>
            </div>
            <div className='mainSale' >
                <button type='button' className='cardSale' >
                    <div className='cardBody' >
                        <div className='cardTitle' >TITULO</div>
                        <div className='cardImg' >IMAGEN</div>
                        <div className='cardDiscount' >-100%</div>
                        <div className='cardPrice' >PRECIO</div>
                    </div>
                </button>
                <button type='button' className='cardSale' >
                    <div className='cardBody2' >
                        VER MAS PRODUCTOS
                    </div>
                </button>
            </div>
            <div className='mainAds' >
                <Ad/>
            </div>
        </div>
    )
}

export default MainSection
