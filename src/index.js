import store from "./store";

import * as actions from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(actions.bugAdded('New Bug'));

store.dispatch(actions.bugResolved(1));

// unsubscribe();

// store.dispatch(actions.bugRemoved(1));

console.log(store.getState());
