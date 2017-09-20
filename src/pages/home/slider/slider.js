import React from 'react'
import {connect} from 'react-redux'
import {privilegeRoute, privilegeIcon} from './privilege-route.js';
import {Link, NavLink,withRouter} from 'react-router-dom'
import classNames from 'classnames/bind'
import './slider.less';
import { Menu, Icon } from 'antd';
let cx = classNames.bind();
const { SubMenu } = Menu;
class Test extends React.Component {
    constructor(props) {
        super(props)
        let rootSubmenuKeys=[]
        if(this.props.menus.suns){
            let suns=this.props.menus.suns;
            for(let i=0;i<suns.length;i++){
                rootSubmenuKeys.push(suns[i].resKey)
            }
        }
        this.state = {
            leftNum: 'aa',
            menuSpread: true,
             openKeys: [],
             rootSubmenuKeys:rootSubmenuKeys
        }
    }
    onOpenChange(openKeys){
        
        let rootSubmenuKeys=this.state.rootSubmenuKeys
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
    }
    
    componentWillMount() {
        
    }
    
    componentDidMount() {
        
    }
    

    handleSpeadMenu() {
        let menuSpread = this.state.menuSpread;

        this.setState({
            menuSpread: !menuSpread
        }, this.props.changeLeftnum(!menuSpread))

        if (!menuSpread) { //关
            const $isOpened = document.querySelector('.is-opened .el-submenu__title');
            if ($isOpened) {
                $isOpened.click();
            }
        }
    }
    onClickItem({ item, key, keyPath }){
      let router=item.props.router;
       this.props.history.push(router);
    }

    render() {
        let {menuSpread, leftNum,openKeys} = this.state
        let {menus} = this.props;
       function  renderSuns(suns){
            let res=[]
            for(let i=0;i<suns.length;i++){
                let me=suns[i]
                let s;
              
               s= <Menu.Item className="sunsItem" router={privilegeRoute[me.resKey]}  key={me.resKey}>{ me.resourcesName}</Menu.Item> 
               res.push(s)
            }
            return res;
       }
        function renderMenu(menus) {
         let res = []
          for(let item in menus){
             if(item=='suns'){
                let menu=menus[item]
                for(let i=0;i<menu.length;i++){
                    let s
                   let men=menu[i]
                   if(men.suns){
                         s= <Menu.SubMenu  key={men.resKey} title={<span>{men.resourcesName }</span>}>
               
                        {renderSuns(men.suns)}
                
                        </Menu.SubMenu>
                    }else{
                        s=<Menu.Item  key={men.resKey}  router={privilegeRoute[men.resKey]} >{ men.resourcesName}</Menu.Item>
                    }
                res.push(s)
 }
             }else{

             }
            }
     
            return res
        }

        return (
            <div className="slider-wrap">
                <div
                    className="slider-top"
                    onClick={this
                    .handleSpeadMenu
                    .bind(this)}>
                  
                    <i
                        className={cx('toggle-menu-icon', menuSpread
                        ? ""
                        : "back")}></i>
                    <span
                        className={menuSpread
                        ? 'dispatch-system '
                        : 'dispatch-system hide '}>会员管理</span>
                </div>
                <Menu
                    openKeys={openKeys}
                    onClick={this.onClickItem.bind(this)}
                     onOpenChange={this.onOpenChange.bind(this)}
                    className={cx('slider-menu', menuSpread
                    ? ''
                    : 'no-spread')}
                    theme="dark"
                     mode="inline"
                     inlineCollapsed={false}
                    >
                  {renderMenu(menus)}
            
                </Menu>
            </div>
        )
    }
}
export default withRouter(Test)
//  {renderMenu(menus)}