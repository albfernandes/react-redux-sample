const INITIAL_STATE =  {
    min:'',
    max:''
}

export default function (state = INITIAL_STATE, action) {
    console.log(action)
    switch(action.type){
        case "MIN_NUM_CHANGE":
            return {
                ...state,
                min: action.payload
            }
        case "MAX_NUM_CHANGE":
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    } 
}