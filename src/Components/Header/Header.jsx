import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.css'


const Header = () => {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
    <div className='container'>
        <Link to='/'>
            <img className='logo' src={logo} alt='logo'/>
        </Link>

        <Link className='reserva' to={'/reservas'}>
            <div><strong>Minhas Reservas</strong></div>
            <span>{reserveSize}</span>
        </Link>
    </div>
  )
}

export default Header