const initialState = { // Es un objeto
    lightIsOn: false
};

const lightIsOnReducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case 'TURN_ON': {
            return { // Siempre se devuelve un objeto, no se muta al objeto original
                ...state,
                lightIsOn: true 
            }
        }
        case 'TURN_OFF': {
            return {
                ...state,
                lightIsOn: false
            }
        }
        case 'TOOGLE': {
            return {
                ...state,
                lightIsOn: !state.lightIsOn
            }
        }
        default: {
            return state;
        }
    }
};

export default lightIsOnReducer;