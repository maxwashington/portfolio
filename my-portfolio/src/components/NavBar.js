import React, { Component } from 'react';
import { Layout, Drawer, Navigation, Header, Content } from 'react-mdl';
import Main from './Main';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div style={{ height: '600px', position: 'relative' }}>
        <Layout>
          <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>}  scroll>
            <Navigation>
              <Link to="/aboutme" style={{ color: 'black' }}>About Me</Link>
              <Link to="/resume" style={{ color: 'black' }}>Resume</Link>
              <Link to="/projects" style={{ color: 'black' }}>Projects</Link>
              <Link to="/contact" style={{ color: 'black' }}>Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>}>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div>
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
