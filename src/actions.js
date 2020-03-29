import * as types from "./types";

export const bugAdded = description => ({
    type: types.BUG_ADDED,
    payload: {
        description
    }
});

export const bugRemoved = id => ({
    type: types.BUG_REMOVED,
    payload: {
        id
    }
});

export const bugResolved = id => ({
    type: types.BUG_RESOLVED,
    payload: {
        id
    }
});
