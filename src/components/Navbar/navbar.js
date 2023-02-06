import './navbar.css'
import CartWidget from '../cartwidget/cartwidget'
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='posicion'>
            <Link to='/'>
            <h1>e-lectronik</h1>
            </Link>
            <CartWidget/>
            <div>
                <Link to={`/category/celular`}>Celulares</Link>
                <Link to={`/category/tablet`}>Tablets</Link>
                <Link to={`/category/almacenamiento`}>Unidades de Almacenamiento</Link>
            </div>
        </nav>
    )
}
export default Navbar