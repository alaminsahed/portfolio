import React from 'react';
import Navbar from '../Component/Navbar';
import HeaderMain from '../Component/HeaderMain';
import About from '../Component/About';
import Skills from '../Component/Skills';
import Projects from '../Component/Projects';
import Blog from '../Component/Blog';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <HeaderMain/>
           <About/>
           <Skills/>
           <Projects/>
           <Blog/>
        </div>
    );
};

export default Home;