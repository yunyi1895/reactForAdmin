import React, { Component } from 'react'
import pureRender from 'pure-render-decorator'
import { Button } from 'element-react';
import { DatePicker, message } from 'antd';
import PageView from '@/components/pageView/pageView.js'
@pureRender
class Counter extends Component {

  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
    this.state={
       date: '',
    }
    //console.log(this.props.fetchPostsIfNeeded)
  }
  clickHandle () {
    let { onIncrement } = this.props
    console.log('没毛病')
    onIncrement()
  }
      handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render () {
    console.log('render count component')
    let { counter, onDecrement, onIncrementAsync, onIncrementAsyncOnce ,fetchPostsIfNeeded} = this.props
    return (
  
      <div>
      <DatePicker onChange={value => this.handleChange(value)} />

        <Button type="danger" onClick={this.clickHandle}>
              Increment
        </Button>
        {' '}
        <button onClick={onDecrement}>
              Decrement
        </button>
        {' '}
        <button onClick={fetchPostsIfNeeded}>
              IncrementAsync
        </button>
        {' '}
        <button onClick={onIncrementAsyncOnce}>
              IncrementAsyncOnce
        </button>
        <hr />
        <div>Clicked: <span style={{fontSize: '20px', color: 'red'}}> {counter} </span>times</div>
      </div>
 
    )
  }
}

export default Counter
