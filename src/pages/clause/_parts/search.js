import React from 'react'
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
let cx = classNames.bind();
import {Row, Col,Select,Input } from 'antd';
const Option = Select.Option;
class ClauseSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    componentWillMount() {
        
    }
    
    componentDidMount() {
        
    }
     handleChange(value) {
  console.log(`selected ${value}`);
}
    render(){
        let {}=this.props;
        let {}=this.state;
        return (
            	<div className="c-box-shadow">
		<Row className="c-box-h c-bottom-bd">
			<Col span={20}>
				<span>状态：</span>
				  <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    </Select>
				<span className="c-ml20">类型：</span>
                  <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    </Select>
				
				<span  className="c-ml20">版本号：</span>
                <Input  style={{ width: 120 }} placeholder="Basic usage" />
				<span className="c-ml20">
					&nbsp;
				</span>
				
				
			</Col>
			<Col span={4}>
			
			</Col>
		</Row>
	
	</div>
        )
    }
    
    
}
export default withRouter(ClauseSearch)