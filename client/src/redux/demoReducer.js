import { SELECT_STUDENT } from "./types";

const initialState = {
    selectedStudent: null
}

const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_STUDENT:
            const student = action.payload;
            return { ...state, selectedStudent: student };
        default:
            return state;
    }
}

export default demoReducer;