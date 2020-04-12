import {createSlice} from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs.splice(index, 1);
        }
    }
});

export const {bugAdded, bugRemoved, bugResolved} = slice.actions;

export default slice.reducer;

// Selector
export const selectUnresolvedBugs = state => state.bugs.filter(bug => !bug.resolved);
