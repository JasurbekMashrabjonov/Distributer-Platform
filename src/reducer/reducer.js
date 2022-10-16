
function reducer(state,{type,payload}){
    switch (type) {
        case "LOGIN":{
            return{
                ...state,
                login:payload
            }
        }
        case "PASSWORD":{
            return{
                ...state,
                password:payload
            }
        }
        case "ALLOW":{
            return{
                ...state,
                allow:!state.allow
            }
        }
            
    
        default:
            return state
        
    }
}

export default reducer;