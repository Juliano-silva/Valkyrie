import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
export default function Header() {
  return (
    <div className={style.Header}>
        <h1>Valkyrie</h1>
        <div className={style.LinkHref}>
        <Link to="/">Principal</Link>
        <Link to="/Adicionar">Adicionar</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Lista">Lista Logins</Link>
        </div>
    </div>
  )
}

