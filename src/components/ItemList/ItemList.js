import './ItemList.css'
import Item from '../Item/Item'
import React from 'react'

const ItemList = ({products }) => {
    return(
        <div className='ListGroup' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
}

export default ItemList