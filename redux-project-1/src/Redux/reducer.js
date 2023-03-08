
import { ADD , REDUCE } from "./actionType";

export const reducer = (state , action) => {
  const {type , payload} = action 

  switch (type){
    case ADD :{
        return {...state , amount:state.amount+payload}
    }

    case REDUCE : {
        return {...state , amount:state.amount-payload}
    }
    default:{
        return state
    }
  }
}
