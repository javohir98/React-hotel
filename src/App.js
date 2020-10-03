import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import AboutUs from './components/pages/AboutUs';
import RoomDetails from './components/pages/RoomDetails';
import BlogDetails from './components/pages/BlogDetails';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/room-details' component={RoomDetails} />
          <Route path='/blog-details' component={BlogDetails} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />

      </div>
    )
  }
}

export default App
