export const addFaq = (newFaq) => {
    return {
        type: "ADD_FAQ",
        payload: newFaq
    }
}

export const removeFaq = (faqToRemoveIdx) => {
    return {
        type: "REMOVE_FAQ",
        payload: faqToRemoveIdx
    }
}

export const removeAllFaqs = () => {
    return {
        type: "REMOVE_ALL_FAQS"
    }
}

export const editOneFaq = (editedFaq, idx) => {
    return {
        type: "EDIT_ONE_FAQ",
        payload: {
            editedFaq,
            idx
        }
    }
}