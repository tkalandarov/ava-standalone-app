import { SELECT_STUDENT } from "./types";

export function selectStudent(student) {
    return {
        type: SELECT_STUDENT,
        payload: student
    };
}