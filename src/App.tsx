import { Layout, Space } from 'antd';
import React from 'react';

import './App.css';
import { BrowserRouter as Router,
 Routes, Route, Link
 } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Articles from './components/Articles';
import DetailArticle from './components/DetailArticle';
import Register from './components/Register';
const { Header, Content, Footer } = Layout;
const aid=1;
const App = () => {
 return (
 <Router>
 <Header>
 <nav>
 <Space>
 <Link to="/">Home</Link>
 <Link to="/dashboard">Dashboard</Link>
 <Link to="/about">About</Link>
{/* <Link to={`/articles/${aid}`}>Articles</Link> */}
   <Link to={`/articles`}>Articles</Link>
    <Link to={`/register`}>Register</Link>
 </Space>
 </nav>
 </Header>
 <Content>
 <Routes>
 <Route index element={ <Home />} />
 <Route path="/about" element={ <About />} />
 <Route path="/dashboard" element={ <Dashboard /> } />
  <Route path="/articles" element={ <Articles /> } /> 
  <Route path="/a/:aid" element={ <DetailArticle /> } /> 
     <Route path="/register" element={ <Register/> } /> 
 </Routes>
 </Content>
 <Footer>
 <p>VT6003CEM Demo</p>
 </Footer>

 </Router>
 );
}
export default App;