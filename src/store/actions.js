import {createAction} from "@reduxjs/toolkit";

export const bugAdded = createAction('createAction');

export const bugResolved = createAction('bugResolved');

export const bugRemoved = createAction('bugRemoved');
