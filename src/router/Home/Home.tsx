import React,{ useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import Head from '../Header/Head';

import { Button, Layout, Menu, theme, Breadcrumb, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('首页', '1', <HomeOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];


const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [themea,setTheme] = useState<MenuTheme>('light');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          background: '#141414',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsed={collapsed}
        collapsedWidth = {100}
      >
        <Button type="primary" onClick={toggleCollapsed} style={{ margin: '15px 10px ' }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Switch onChange={changeTheme} style={{ margin:'0 3px 0 10px' }} /> 深色
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme={themea}
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: collapsed ? 100 : 200 , height:'100vh'}}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Head />
        </Header>
        <Breadcrumb
          items={[
            {
              title: <a href="">Home</a> ,
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: 'An Application',
            },
          ]}
          style={{
            margin: '10px 0 0 10px'
          }}
        />
        <Content style={{ margin: '10px 16px 0', overflow: 'initial', minHeight:'79.5vh'}}>
          <div style={{ padding: 18, textAlign: 'center', background: colorBgContainer, height:'79.5vh'}}>
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;