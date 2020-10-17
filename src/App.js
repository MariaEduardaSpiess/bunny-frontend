import React from 'react';
import './App.css';
import Routes from './routes';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './bunny.png';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <Layout>
        <Header>
          <a href="/"><img className="logo" src={logo} alt="Logo" /></a>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
