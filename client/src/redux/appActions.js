import { TOGGLE_MODAL } from "./types";

export function toggleModal(modal) {
    return {
        type: TOGGLE_MODAL,
        payload: modal
    };
}