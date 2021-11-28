import { useState } from 'react'
import { Layout, Menu } from 'antd'
import Home from './components/Home'
import Play from './components/Play'
import { GithubFilled } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {

  const [ selected, setSelected ] = useState(1)

  return (
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', marginBottom: 24 }}>
        <div className="logo">Trivia!</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={selected.toString()}>
          <Menu.Item key="1" onClick={() => setSelected(1)}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => setSelected(2)}>Play</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px 50px 0 50px', marginTop: '7vh' }}>
        <div className="site-layout-content">
          { 
            selected === 1 ? <Home setSelected={setSelected} /> :
            selected === 2 && <Play /> 
          }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Trivia! ©2021 Created by Ethan Shealey | <a href="https://www.github.com/ethanshealey/ReactTrivia" target="_blank" rel="noreferrer" ><GithubFilled style={{ color: 'black' }}/></a></Footer>
    </Layout>
  );
}

export default App;
