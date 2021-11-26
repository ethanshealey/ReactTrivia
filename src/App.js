import { useState } from 'react'
import { Layout, Menu } from 'antd'
import Home from './components/Home'
import Play from './components/Play'
import 'antd/dist/antd.css'
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {

  const [ selected, setSelected ] = useState(1)

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Trivia!</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selected.toString()}>
          <Menu.Item key="1" onClick={() => setSelected(1)}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => setSelected(2)}>Play</Menu.Item>
          <Menu.Item key="3" onClick={() => setSelected(3)}>About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px 0 50px' }}>
        <div className="site-layout-content">
          { 
            selected === 1 ? <Home setSelected={setSelected} /> :
            selected === 2 ? <Play /> :
            selected === 3 && <h3>About</h3>
          }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Trivia! ©2021 Created by Ethan Shealey</Footer>
    </Layout>
  );
}

export default App;
