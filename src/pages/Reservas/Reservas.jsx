import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateAmountReserve } from '../../store/modules/reserve/actions'
import {MdDelete,MdAddCircle,MdRemoveCircle} from 'react-icons/md'
import './style.css'



export const Reservas = () => {

  const dispath = useDispatch()

  const reserves = useSelector( state => state.reserve)

  function handleRemove(id){
    dispath({
      type:'REMOVE_RESERVE',
      id
    })
  }



  function decrementAmount(trip){
    dispath(updateAmountReserve(trip.id,trip.amount-1))
  }

  function incrementAmount(trip){
    dispath(updateAmountReserve(trip.id,trip.amount+1))
  }

  return (
    <div>
      <h1 className='title'>voce solicitou {reserves.length} reserva</h1>

      {reserves.map(reserve => (
        <div className='reservas' key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>

          <div id='amount'>
            <button type='button' onClick={()=>decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color='#191919'/>
            </button>
            <span>{reserve.amount}</span>
            <button type='button' onClick={()=>incrementAmount(reserve)}>
              <MdAddCircle size={25} color='#191919'/>
            </button>
          </div>
         
          <button type='button' onClick={()=>handleRemove(reserve.id)}>
            <MdDelete size={20} color={`#191919`}/>
          </button>
        </div>
      ))}

      <footer>
        <button type='button'>solicitar reservas</button>
        
      </footer>
    </div>

    
  )
}
