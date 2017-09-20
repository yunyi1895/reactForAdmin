import React from 'react'
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
let cx = classNames.bind();
import {Row, Col} from 'antd';
import PageView from '@/components/pageView/pageView.js'
import Search from './_parts/search'
class Clause extends React.Component {
    constructor(props) {
        super(props)
      console.log(props)
        this.state = {
            style:{
                "paddingTop":'15px',
               
            },
             tofrom:true
        }
    }
    
    componentWillMount() {
        
    }
    
    componentDidMount() {
        let vm=this;
        setTimeout(function(){
            vm.setState({
                tofrom:false
            })
        },1500)
    }
    handleClick(){
        this.props.getProvisionList({});
        this.props.globalTest(2233)
    }
    render(){
        let {clause,gloabl}=this.props;
        let {style,tofrom}=this.state;
     
        return (
                <PageView tofromOver={tofrom}>
                    <div className="c-page-content" style={style}>
                    	<Search className="c-search-wrap" >
		                </Search>
                      <button onClick={this.handleClick.bind(this)}>aaaa</button>
                      {JSON.stringify( clause)}
                      {JSON.stringify( gloabl)}
                    </div>
                </PageView>

        )
    }
    
    
}
export default withRouter(Clause)