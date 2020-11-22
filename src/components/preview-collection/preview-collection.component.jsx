import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'





const PreviewCollection = ({title , items}) => {
    return (
        <div className='collection-preview'>
           <h1 className='title'>{title.toUpperCase()}</h1>  
           <div className='preview row '>
                {
                    items.filter((item , index) => index < 4)
                    .map(item => {
                        return <div>
                            <CollectionItem key = {item.id} name = {item.name} url={item.imageUrl}/>
                        </div>
                    })
                }
           </div>
        </div>
    )
}

export default PreviewCollection;

// return <h4 key = {items.id}>{item.name}</h4>