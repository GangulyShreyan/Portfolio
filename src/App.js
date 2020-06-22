import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
    return (
        <div>
                <Layout fixedHeader>
                    <Header className ="header-color" title={<Link style = {{textDecoration : 'none', color: 'white'}} to = "/">Home</Link>} scroll>
                        <div class= "nav-menu">
                            <Navigation>
                                <Link to="/projects">Projects</Link>
                                <Link to="/resume">Resume</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </div>
                    </Header>
                    <Drawer title={<Link style = {{textDecoration : 'none', color: 'black'}} to = "/">Home</Link>} >
                        <Navigation>
                                <Link to="/projects">Projects</Link>
                                <Link to="/resume">Resume</Link>
                                <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className = "page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>

        );
    }

    export default App;