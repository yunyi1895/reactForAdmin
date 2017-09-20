import React from 'react'
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
let cx = classNames.bind();
import {Row, Col} from 'antd';
import './header.less';
class Header extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {}
    }

    componentWillMount() {}

    componentDidMount() {}
    handleHideMessage(){

    }
    loginOut(){

    }
    render() {
        let {children} = this.props;
        let {} = this.state;
        return (
            <div className="header-wrap">
                <Row>
                    <Col span={11}>
                        &nbsp;
                    </Col>
                    <Col span={7}>
                        &nbsp;
                      
                    </Col>
                    <Col span={4} className="user-info">
                        <i className="icon-user"></i>
                        <span>cmf</span>
                    </Col>
                    <Col span={2}>
                        <div className="login-out">
                            <span
                                onClick={this
                                .loginOut
                                .bind(this)}>退出</span>
                        </div>
                    </Col>
                </Row>
                {/*<div
                    className="message-mask"
                 
                    onClick={this
                    .handleHideMessage
                    .bind(this)}></div>*/}
            </div>
        )
    }

}
export default withRouter(Header)