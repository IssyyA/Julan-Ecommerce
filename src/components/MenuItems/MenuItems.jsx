import React from 'react'
import './MenuItems.scss'

const MenuItems = ({title, imageUrl,size}) => {
    return ( 
        <div className={`${size} menu-items `}>
                    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
     </div>
       
    )
}
export default MenuItems