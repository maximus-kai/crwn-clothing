import React from 'react';
import {Link} from 'react-router-dom';

const CollectionItem = ({name,url}) => {

    console.log(url)
    return (
        <div className="col-md-12">
        <div className='card mb-2 shadow-sm'>
            <img
            src={url}
            alt='the item'
            className='card-img-top'
            />
        <div className='card-body'>
            <h5 className = 'card-title'>{name}</h5>
            <Link to='/shop' className='btn btn-success'>
                Add to Cart
            </Link>
        </div>
        </div>
        </div>
    )
}

export default CollectionItem
