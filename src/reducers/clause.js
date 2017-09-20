import createReducer from '@/utils/createReducer';
import { ACTION_HANDLERS } from '@/actions/clause/index.js';
const initState={
    a:2
};
export default createReducer(initState, ACTION_HANDLERS)