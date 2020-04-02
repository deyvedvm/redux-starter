import {createReducer} from "@reduxjs/toolkit";

import {bugAdded, bugRemoved, bugResolved} from "./actions";

let lastId = 0;

export default createReducer([],
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
