import {Component} from 'react';
import {Layout} from 'antd';
import { Menu } from 'antd';
import { Icon } from 'antd';
import Link from 'umi/link'
const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu
class BasicLayout extends Component{
  render(){
    return(
      <Layout>
        <Sider width={256} style={{minHeight:'100vh',color:'white'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>hello world</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="dashboard"/><span>DashBoard</span></span>} > 
              <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
          </Menu>
        
        </Sider>
        <Layout>
          <Header style={{background:'#fff',textAlign:'center',padding:0}}>Header</Header>
          <Content style={{margin:'24px 16px 0'}}>
          <div style={{padding:24,background:'#fff',minHeight:360}}>
            {this.props.children}
          </div></Content>
          <Footer style={{textAlign:'center'}}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout;