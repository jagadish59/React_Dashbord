 const DarkModeReducer=(state,action)=>{
    switch (action.type){
        case "Light":
             return{darkMode:false}
            break;
        case "Dark":
            return{darkMode:true}
            break;
        case "togle":
            return{darkMode:!state.darkMode}
            break;
        default:
            return state;
            break;
            
    }

}
export default DarkModeReducer;