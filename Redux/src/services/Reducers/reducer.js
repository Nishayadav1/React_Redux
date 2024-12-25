import { Add_To_Cart } from "../constants"

const initialSate={
    cardDate:[]
}

export const cardItems=(state=initialSate,action)=>{
    switch(action.type){
        case Add_To_Cart:
        return{
            ...state,
            cardData:action.Data
        }
    }
}