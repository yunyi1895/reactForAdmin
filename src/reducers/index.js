import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import clause from './clause';
import gloabl from './gloabl';


export default combineReducers({
 clause,
  gloabl
})
