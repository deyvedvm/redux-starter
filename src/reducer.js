import * as types from "./types";

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case types.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case types.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case types.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});

        default:
            return state;

    }
}
