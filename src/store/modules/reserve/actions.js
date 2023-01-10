
export function updateAmountReserve ( id, amount){
    return {
        type:'UPDATE_RESERVE',
        id,
        amount
    }
}

export function AdRequest(id){
    return {
      type: 'Add_RESERVE_REQUEST',
      id
    }
  }