import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import './style/index.less'
import HeaderMoudle from '../../components/HeaderMoudle/index.js'
import SideMenu from '@/components/SideMenu/index.js'
const { Header, Content, Sider } = Layout;

class ChildMoudle extends Component {
state = {
  headerData:['nav1','nav2','nav3']
}
render() {
  return (
    <div className="content-box">
    <Layout>
    <Header className="header">
      <HeaderMoudle headerData={this.state.headerData}></HeaderMoudle>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <SideMenu />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </div>
  )
}
}
export default ChildMoudle;