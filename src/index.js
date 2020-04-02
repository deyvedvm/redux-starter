import store from "./store";

import {bugAdded, bugRemoved, bugResolved} from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded('New Bug 1'));
store.dispatch(bugAdded('New Bug 2'));
store.dispatch(bugAdded('New Bug 3'));

store.dispatch(bugResolved(1));

// unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
