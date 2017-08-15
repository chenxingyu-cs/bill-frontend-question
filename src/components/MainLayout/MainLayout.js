import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './MainLayout.css';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>对账账单</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="pie-chart" />
              <span>分账账单</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>退出</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span style={{ fontSize: '20px' }}>
              对账账单
            </span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            净悦洗衣 ©2016 Created by Alchemist
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
