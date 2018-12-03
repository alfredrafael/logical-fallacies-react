import React, { Component } from 'react';
import './App.css';
import './DoorComponentFile'

import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import DoorComponentFile from './DoorComponentFile';


class App extends Component {
  render() {
    return (
      <section>
      <DoorComponentFile/>
      </section>
    )
  }
}

export default App;
