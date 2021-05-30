import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Skill from './components/skill/Skill';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
function App() {
  return (
    <div className="App">
      <Banner className="App-banner"></Banner>
      <Skill className="App-skill"></Skill>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
