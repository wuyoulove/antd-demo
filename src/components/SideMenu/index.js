import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { getMenu } from '@/lib/api.js'
const { SubMenu } = Menu;

class SideMenu extends Component{
  constructor(){
    super()
    this.state = {
      menuData:[
        {
          "ename":"population:actual",
          "ico":"../../../src/assets/img/icon-realityPerson.svg",
          "isParent":true,
          "moduleName":"模块管理1",
          "permissions":[
            {
              "appKey":"tq-zjgrid-population",
              "cname":"主页",
              "createDate":1575532631000,
              "description":"",
              "enable":true,
              "ename":"population:actual:residence",
              "ico":"user",
              "id":"482",
              "indexId":"1",
              "isDeleted":0,
              "jumpType":"",
              "leaderUrl":"",
              "levelType":2,
              "moduleName":"主页",
              "normalUrl":"/contentMoudle/home",
              "parent":false,
              "parentId":"479",
              "permissionType":1,
              "urlTarget":""
            },
            {
              "appKey":"tq-zjgrid-population",
              "cname":"管理列表",
              "createDate":1575532631000,
              "description":"",
              "enable":true,
              "ename":"population:actual:transient",
              "ico":"user",
              "id":"483",
              "indexId":"2",
              "isDeleted":0,
              "jumpType":"",
              "leaderUrl":"",
              "levelType":2,
              "moduleName":"管理列表",
              "normalUrl":"/contentMoudle/management",
              "parent":false,
              "parentId":"479",
              "permissionType":1,
              "urlTarget":""
            },
            {
              "appKey":"tq-zjgrid-population",
              "cname":"记录列表",
              "createDate":1575532631000,
              "description":"",
              "enable":true,
              "ename":"population:actual:foreigner",
              "ico":"user",
              "id":"484",
              "indexId":"3",
              "isDeleted":0,
              "jumpType":"",
              "leaderUrl":"",
              "levelType":2,
              "moduleName":"记录列表",
              "normalUrl":"/contentMoudle/recordList",
              "parent":false,
              "parentId":"479",
              "permissionType":1,
              "urlTarget":""
            }
          ]
        },
        {
          "ename":"population:actual2",
          "ico":"../../../src/assets/img/icon-realityPerson.svg",
          "isParent":true,
          "moduleName":"模块管理2",
          "normalUrl":"/contentMoudle",
          "permissions":[]
        }
      ]
    }
  }
  toggleMenu (item, key, keyPath, domEvent){
    console.log(1111,item)
    this.props.history.replace(item.key);
  }
  // 获取菜单数据
  getMenu = ()=> {
    getMenu().then(res => {
      this.setState(
        {
          menuData:res.data
        }
      )
    })
  }
  // componentWillMount = () => {
  //   // this.getMenu()
  // }
  componentDidMount = () => {
    console.log('componentDidMount')
    this.getMenu()
  }
  render(){
    return (
      <Menu
          mode="inline"
          defaultSelectedKeys={[this.state.menuData[0].permissions[0].normalUrl]}
          defaultOpenKeys={[this.state.menuData[0].ename]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            this.state.menuData.map((item) => (
              item.permissions.length ? 
              <SubMenu key={item.ename} icon={<UserOutlined />} title={item.moduleName}>
                {
                  item.permissions.map((itm) => (
                    <Menu.Item key={itm.normalUrl} onClick={this.toggleMenu.bind(this)} icon={<UserOutlined />}>{itm.moduleName}</Menu.Item>
                  ))
                }
              </SubMenu>
              : <Menu.Item key={item.normalUrl} onClick={this.toggleMenu.bind(this)} icon={<UserOutlined />}>{item.moduleName}</Menu.Item>
            ))
          }
        </Menu>
    )
  }
}
export default withRouter(SideMenu)