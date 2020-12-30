import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Layout } from 'antd';
import './style/index.less'
import routes from './routes.js'
import HeaderMoudle from '../../components/HeaderMoudle/index.js'
import SideMenu from '@/components/SideMenu/index.js'
import BreadcCumbs from '@/components/BreadcCumbs/index.js'
const { Header, Content, Sider } = Layout;

class ChildMoudle extends Component {
  constructor(props){
    super(props);
    this.state={
      headerData:['nav1','nav2','nav3'],
      BreadcCumbsData:['Home','List','App'],
      collapsed: false,
    }
}
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
render() {
  const { collapsed } = this.state;
  return (
    <div className="content-box">
    <Layout>
    <Header className="header">
      <HeaderMoudle headerData={this.state.headerData}></HeaderMoudle>
    </Header>
    <Layout>
      <Sider width={256} collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="site-layout-background">
        <SideMenu />
      </Sider>
      <Layout style={{ padding: '0 10px 10px' }}>
        <BreadcCumbs source={this.state.BreadcCumbsData}></BreadcCumbs>
        <Content
          className="content"
          key={this.props.location.key}
        >
          {
            <Router>
              <Switch>
                  {
                      routes.map((route,i) => (
                          <Route exact={route.exact} path={route.path} component={route.component} key={route.path}></Route>))
                  }
              </Switch>
            </Router>
          }
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
  )
}
}
export default ChildMoudle;