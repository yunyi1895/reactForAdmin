import {
    INCREMENT,
    INCREMENT_IF_ODD,
    DECREMENT,
    INCREMENT_ASYNC,
    RECEIVE_POSTS
} from '@/const/actions'

export default function counter(state = 10, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case INCREMENT_IF_ODD:
            return (state % 2 !== 0) ? state + 1 : state
        case DECREMENT:
            return state - 1
        case INCREMENT_ASYNC:
            return state + 1
        case RECEIVE_POSTS:
            return action.res
        default:
            return state
    }
}