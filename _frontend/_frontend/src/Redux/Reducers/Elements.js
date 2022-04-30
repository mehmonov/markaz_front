const initialState ={
    currentActive:'',
    courses:[]

}

function Elements(state =initialState,{type,payload}) {
   switch (type) {
      
        case "CHANGE_ACTIVE_BTN":
            return{
                ...state,
                currentActive:payload,
            }
            
        case "COURCES_FETCHING":
            return{
                ...state,
                courses:payload,
            }

       default:
           return state;
   }
}

export default Elements;