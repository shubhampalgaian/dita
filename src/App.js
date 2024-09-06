import './App.scss';

import React, { useState } from "react";
import { Layout, Menu, Button, Divider } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Icon } from './components/IconComponent';

const { Sider } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar / Sider */}
      <Sider
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        trigger={null}
        width={250}
        collapsedWidth={80}
        className="sidebar"
      >
        {/* Top Section */}
        <div>

          {/* Logo */}
          <div className={`custom-icon w-full ${collapsed ? "collapsed-logo" : ""}`}>  <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
            <Menu.Item key="1" icon={<Icon iconName={"Logo"} />}>

            </Menu.Item>
          </Menu>
          </div>

          {/* Menu Items */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} className='menu-icons'>
            <Menu.Item key="1" icon={<HomeOutlined className='haha' />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined style={{ width: '2em', height: '2em' }} />}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              Setting
            </Menu.Item>
          </Menu>

          <div style={{padding: '0 16px'}}>
            <Divider style={{ color: 'white', border: '1px solid', position: 'relative', transform: 'translateX(-50%)', left: '50%', width: '100%' }} />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="custom-icon-bottom" style={{padding: '0 16px', marginBottom: '12px'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} className='bottom-menu'>
            <Menu.Item key="4" icon={<Icon iconName={"Profile"} />}>

            </Menu.Item>
          </Menu>

          <div style={{
            padding: collapsed ? "0 0 !important" : "0 16px !important"
          }}>
            <Divider style={{ color: 'white', border: '1px solid', position: 'relative', transform: 'translateX(-50%)', left: '50%', width: '100%', margin: collapsed ? '0 !important' : '' }} />
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} className='bottom-menu'>

            <Menu.Item key="5" icon={<Icon iconName={"Mobius"} />}>

            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </Layout>
  );
};
