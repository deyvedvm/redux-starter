import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

export const bugAdded = createAction('createAction');

export const bugResolved = createAction('bugResolved');

export const bugRemoved = createAction('bugRemoved');

let lastId = 0;

const reducer = createReducer([],
    {
        [bugAdded.type]: (state, action) => {
            state.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },

        [bugResolved.type]: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved = true;
        },

        [bugRemoved.type]: (state, action) => {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state.splice(index, 1);
        }
    });


const store = configureStore({reducer});

export default store;
