import store from "./store/bugs/store";

import {bugAdded, bugRemoved, bugResolved} from "./store/bugs/store";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({description: 'New Bug 1'}));
store.dispatch(bugAdded({description: 'New Bug 2'}));
store.dispatch(bugAdded({description: 'New Bug 3'}));

store.dispatch(bugResolved({id: 1}));

// unsubscribe();

store.dispatch(bugRemoved({id: 1}));

console.log(store.getState());
