import  { useState } from 'react';
import '../../css/Layout.css';
import {Button, Layout} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../../components/Layout/Logo';
import MenuList from '../../components/Layout/MenuList';
import { Outlet } from 'react-router-dom';

const { Header, Sider } = Layout;

function LayoutP()  {
  const [Collapsed, setCollapsed] = useState(true);
  return (
    
        <Layout>
            <Sider collapsed={Collapsed} theme='light' className="sidebar"> 
            <Logo /> 
            <MenuList />
            </Sider>
            <Layout >
                <Header className='layout-header'>
                  <Button 
                  type='text' 
                  className='toggle'
                  onClick={() => setCollapsed(!Collapsed)}
                  icon={Collapsed ?
                    <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                  />
                </Header>
                <Outlet /> {/* Esto renderiza las sub-rutas*/}
            </Layout>
        </Layout>

  );
};
export default LayoutP;