const initialState = { // Es un objeto
    counter: 0,
};

const counterReducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case 'INCREMENT': {
            return { // Siempre se devuelve un objeto idéntico, no se muta al objeto original
                ...state,
                counter: state.counter + 1 
            }
        }
        case 'DECREMENT': {
            return {
                ...state, // Destructuramos state en el return para devolver los 
                          // valores con cambios y el resto del objeto sin cambios.
                counter: state.counter - action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default counterReducer;