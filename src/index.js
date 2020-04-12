import store from "./store/store";

import {bugAdded, bugRemoved, bugResolved, selectUnresolvedBugs} from "./store/bugs/store";
import {projectAdded} from "./store/projects/store";

// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// });

store.dispatch(projectAdded({name: 'New Project'}));

store.dispatch(bugAdded({description: 'New Bug 1'}));
store.dispatch(bugAdded({description: 'New Bug 2'}));
store.dispatch(bugAdded({description: 'New Bug 3'}));

store.dispatch(bugResolved({id: 1}));

// unsubscribe();

// store.dispatch(bugRemoved({id: 1}));

console.log(store.getState());

console.log(selectUnresolvedBugs(store.getState()));
