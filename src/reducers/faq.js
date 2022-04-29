const initialState = {
    faqs: []
};

const faqReducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case 'ADD_FAQ': {
            let newFaqsArray = []
            newFaqsArray.push( ...state.faqs )
            newFaqsArray.push( action.payload )
            return {
                ...state,
                faqs: newFaqsArray
            }
        }

        case 'REMOVE_FAQ': {
            let newArrFaqs = []
            newArrFaqs = state.faqs.slice(0, action.payload)
            if ((state.faqs.length-1)-action.payload !== 0)
                newArrFaqs.push(...(state.faqs.slice(-((state.faqs.length-1)-action.payload))))
            return {
                ...state,
                faqs: newArrFaqs
            }
        }

        case 'REMOVE_ALL_FAQS': {
            let newArrFaqs = []
            return {
                ...state,
                faqs: newArrFaqs
            }
        }

        case 'EDIT_ONE_FAQ': {
            let newArrFaqs = []
            newArrFaqs = [...state.faqs]
            newArrFaqs[action.payload.idx] = action.payload.editedFaq
            return {
                ...state,
                faqs: newArrFaqs
            }
        }

        default: {
            return state;
        }
    }
}

export default faqReducer