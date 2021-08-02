import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Banner from './components/banner/Banner';
import Skill from './components/skill/Skill';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
import Resume from './components/resume/Resume';


function App() {
  return (
    <Router>
      <Banner className="App-banner"></Banner>
      <Skill className="App-skill"></Skill>
      <Resume></Resume>
      <Project></Project>
      <Footer></Footer>

      {/* <Switch>
          <Route exact path="/project">
          <Resume></Resume>
          </Route>
      </Switch> */}
      
    </Router>
  );
}

export default App;
