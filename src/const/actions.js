const INCREMENT = 'INCREMENT' // 增加
const DECREMENT = 'DECREMENT' // 减少
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'
const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
const INCREMENT_ASYNC_ONCE = 'INCREMENT_ASYNC_ONCE'
const RECEIVE_POSTS = "RECEIVE_POSTS"
import * as API from '@/server'

function requestPosts(subreddit) {
    // return {
    //   type: REQUEST_POSTS,
    //   subreddit
    // }
}

function receivePosts(res) {
    return {
        type: RECEIVE_POSTS,
        res,

    }
}

export function fetchPostsIfNeeded(id) {

    // return (dispatch, getstate) => {
    //   dispatch(requestPosts());
    // return API.getSceneInfo(123).then(res => {
    //     console.log(res)
    //     dispatch(receivePosts(res.status))
    // });
    return async function(dispatch) {
        let res = await API.getSceneInfo(123);
        console.log(res)
        dispatch(receivePosts(res.status))
    }

    //  }
}

export {
    INCREMENT,
    INCREMENT_IF_ODD,
    DECREMENT,
    INCREMENT_ASYNC,
    INCREMENT_ASYNC_ONCE,
    RECEIVE_POSTS
}