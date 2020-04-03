import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./reducer";

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));

export default store;
