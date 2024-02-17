 export  default function taskReducer  (state, action){
    switch (action.type){
        case "ADD_TASK":
            return[...state, action.payload]
            break;
        case "EDIT_TASK":
            return{
                
            }
        default:
            return state;    
    }
}