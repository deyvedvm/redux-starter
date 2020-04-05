import {combineReducers} from "redux";

import bugs from './bugs/store'
import projects from './projects/store'

export default combineReducers({
    bugs: bugs,
    projects: projects
});
