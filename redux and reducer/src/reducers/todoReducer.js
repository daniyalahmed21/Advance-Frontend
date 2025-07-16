function TodoReducer (state,action) {
    if(action.type === "add_todo"){
        return {
            ...state
        }
    }
}

export default TodoReducer;