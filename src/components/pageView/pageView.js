import React from 'react'
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
let cx = classNames.bind();
import './pageView.less';
import {Row, Col,Spin} from 'antd';

class PageView extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showS:{
                display:this.props.tofromOver?'':'none'
            }
        }
    }

    componentWillMount() {}

    componentDidMount() {}
    render() {
        let {children,tofromOver} = this.props;
        let {showS} = this.state;
        return (
            <div className="page-view">
                <ReactCSSTransitionGroup transitionName="fade"  transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                    <div className="loading-wrap" style={{ display:tofromOver?'':'none'}}>
                        <Spin tip="加载中..."> </Spin>
                  
                    </div>
                </ReactCSSTransitionGroup>
                {children}
            </div>
        )
    }

}
export default PageView