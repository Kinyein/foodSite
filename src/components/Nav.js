import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navStyle.css'

const Nav = () => {
  return (
    <div>
        <nav>
            <Link className="link" to="/">Inicio</Link>
            <Link className="link" to="/list">Lista Comidas</Link>
            <Link className="link" to="/add">Añadir Comidas</Link>
        </nav>
    </div>
  )
}

export default Nav