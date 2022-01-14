import { TOGGLE_MODAL } from "./types";

const initialState = {
    activeModal: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            const modal = action.payload;
            if (state.activeModal === modal)
                return { ...state, activeModal: null };
            else return { ...state, activeModal: modal };
        default:
            return state;
    }
}

export default appReducer;