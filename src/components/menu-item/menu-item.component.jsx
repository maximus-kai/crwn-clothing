import React from 'react';
import {withRouter } from 'react-router-dom';


import './menu-item.styles.scss';

const MenuItem = ({title , imageUrl , size , history ,linkUrl , match}) => {

    return (
        <div className='col-md-4'>

        <div
         className="card"
        //  style = {
        //     {
        //         // backgroundImage: `url(${imageurl})`
        //         backgroundImage:`url(${imageUrl})`,
        //         // backgroundImage: `url(https://i.ibb.co/GCCdy8t/womens.png)`
        //     }
        // }
        //  className={`${size} menu-item`} 

        >
            <div className='card-body'>
            <img src={imageUrl} class="card-img" alt="..."></img>
                <h5 className="card-title">{title.toUpperCase()}</h5>
                <button  onClick={() => history.push(`${match.url}${linkUrl}`)} className='btn btn-success'>Shop Now</button>
            </div>
        </div>
        </div>
    )
}

export default withRouter(MenuItem);