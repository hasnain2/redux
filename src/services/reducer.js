import { combineReducers } from "redux"
import InstaReducer from "./feed/reducer"

const reducer = combineReducers({
    insta: InstaReducer,
})

export default reducer