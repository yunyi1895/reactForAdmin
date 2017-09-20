import React from 'react'
import {connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
import {Link, NavLink} from 'react-router-dom'

import Slider from './slider/slider.js';
import Header from './header/header.js';
import {menus} from './menus.js'; //如何分类的
import { Row, Col } from 'antd';
import './home.less'
import {privilegeRoute} from './slider/privilege-route.js'; //将左边的逐个对应
class Homl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftNum: 3,
            leftMenus: []
        }
    }

    componentWillMount() {
        let resourcesTree = {}
        resourcesTree = menus.data
        if (resourcesTree.length == 0) {
            return false
        }
        if (resourcesTree) {
            this.setState({leftMenus: resourcesTree})

        }
        return false;
    }

    componentDidMount() {}
    handleChangeLeftNum(isSpread) {
        this.setState({
            leftNum: isSpread
                ? 3
                : 1
        })
        // this.leftNum = isSpread ? 3 : 1;
    }
    render() {
        let {leftNum, leftMenus} = this.state
        //  console.log(this.state.leftMenus)   let handleChangeLeftNum = function () {}
        return (
            <Row className="home-wrap">
                <Col span={leftNum} className="home-left">
                    <Slider
                        menus={leftMenus}
                        changeLeftnum={this
                        .handleChangeLeftNum
                        .bind(this)}></Slider>
                </Col >
                <Col className="home-right" span={24 - leftNum}>
                    <Header>
                      
                    </Header>
                    <div className="router-view-wrap">
                      {this.props.children}
                    </div>
                </Col>
            </Row>
        )
    }
}
export default Homl