import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Counter from '@/components/Counter'
import CountTimer from '@/components/CountTimer'
import {fetchPostsIfNeeded} from '@/const/actions.js'
import {INCREMENT, DECREMENT, INCREMENT_ASYNC, INCREMENT_ASYNC_ONCE} from '@/const/actions'
import {CT_SHOW_REQUEST} from '@/const/countTimer'
import {DatePicker} from 'element-react';
import PageView from '@/components/pageView/pageView.js'
class counterContainer extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
   value1:null
  }
}
  render() {
    const {onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce, fetchPostsIfNeeded} = this.props
    const {onShowCountTimer} = this.props
    let {counter, countTimer} = this.props
    let {value1} =this.state
    return (
      <PageView>
      <div>
          
        <Counter
          {...{onIncrement, onDecrement, onIncrementAsync, onIncrementAsyncOnce, counter,fetchPostsIfNeeded}}/>
        <button onClick={onShowCountTimer}>点击显示1</button>
        <CountTimer show={countTimer.show}/>
      </div>
      </PageView>
    )
  }
}

const mapStateToProps = (state) => {
  return {counter: state.counter, countTimer: state.countTimer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement() {
      dispatch({type: INCREMENT})
    },
    onDecrement() {
      dispatch({type: DECREMENT})
    },
    onIncrementAsync() {

      dispatch({type: INCREMENT_ASYNC, data: 122})
    },
    onIncrementAsyncOnce() {

      dispatch({type: INCREMENT_ASYNC_ONCE})
    },
    onShowCountTimer() {
      dispatch({type: CT_SHOW_REQUEST})
    },
    fetchPostsIfNeeded: bindActionCreators(fetchPostsIfNeeded, dispatch)
  }
}
//fetchPostsIfNeeded
export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
