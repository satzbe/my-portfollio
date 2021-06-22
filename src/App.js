import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route  path='/' exact component={Home} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;