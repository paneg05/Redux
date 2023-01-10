import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import api from '../../services/api'
import {MdFlightTakeoff} from 'react-icons/md'
import './style.css'


export const Home = () => {

  const dispatch = useDispatch()
    const [trips,setTrips]=useState([])

    useEffect(()=>{
        async function loadApi(){
          const response = await api.get(`trips`)
          setTrips(response.data)
          console.log(response.data)
        }

        loadApi()

    },[])

    function handleAd(trip){
      dispatch({
        type: 'Add_RESERVE',
        trip
      })
    }

  return (
    <div>
      <div className='box'>
        {trips.map(trip=>{
          return(
            <li key={trip.id}>
                <img src={trip.image} alt={trip.title} />
                <strong>{trip.title}</strong>
                <span>status : {trip.status? `disponivel`: `indisponivel`}</span>

                <button type='button' onClick={()=> handleAd(trip)}>
                  <div><MdFlightTakeoff color='#fff'/></div>
                  <span>Solicitar Reserva</span>
                </button>
            </li>
          )
        })}
      </div>
    </div>
  )
}
