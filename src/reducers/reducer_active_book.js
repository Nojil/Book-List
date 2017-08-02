//reducers are always called when an action is called
//state argument is not application state, only the state this reduceer is responsible for

//state = null is JS6 that says if state comes in as 'undefined' set it to null
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}
