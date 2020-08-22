import React from 'react';
import {BrowserRouter as Router, Link, Switch}from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/homepage';
import Pagination from './components/pagination';
import Footer from './components/footer';
import About from './components/about';
import Issue from './components/reportIssue';
import CustAna from './components/custom_analysis';
const jss= [
  {
      "link": "india/nine-dead-in-srisailam-power-plant-blaze/cid/1789708",
      "headline": "nine dead in fire at power plant",
      "text": "nine people have died in the fire accident at srisailam hydroelectric plant, on the telangana-andhra pradesh border on friday, a senior government official said. six bodies h...",
      "time": "1598012571"
  },
  {
      "link": "calcutta/marching-with-netaji-subhas-chandra-bose/cid/1789706",
      "headline": "marching with netaji",
      "text": "",
      "time": "1598012571"
  },
  {
      "link": "culture/style/make-up-pro-ruby-hammer-looks-back-at-her-successful-journey/cid/1789701",
      "headline": "ruby hammer's successful journey",
      "text": "ruby hammer has a radiant charm about her. a beautiful smile, kind twinkling eyes and oh-so-comfortable in her own skin. the london-based globa...",
      "time": "1598012571"
  },
  {
      "link": "entertainment/class-of-83-streaming-on-netflix-is-a-case-of-what-could-have-been/cid/1789699",
      "headline": "a case of what could have been",
      "text": "",
      "time": "1598012571"
  }
]

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Router exact path ='/'>
            <HomePage Json={jss} />
            <Pagination />
        </Router>
        <Router  path = '/custom-analysis'>
            <CustAna />
        </Router>
        <Router  path = '/about'>
            <About />
        </Router>
        <Router path = '/issue'>
            <Issue />
        </Router>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
