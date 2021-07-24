import { combineReducers } from 'redux'

import events from './reducer/index'

const rootReducer = combineReducers({
   todos: events,
})

export default rootReducer
