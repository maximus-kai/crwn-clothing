import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({title , imageUrl , size}) => {
    return (
        <div style = {
            {
                // backgroundImage: `url(${imageurl})`
                backgroundImage:`url(${imageUrl})`,
                // backgroundImage: `url(https://i.ibb.co/GCCdy8t/womens.png)`
            }
        } className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem