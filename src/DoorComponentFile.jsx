import React, { Component } from 'react';
import './DoorComponentStyle.css';

import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class DoorComponentFile extends Component {
  render() {
    return (
      <section className="first-page-component">
      <Navbar inverse collapseOnSelect>
       <Navbar.Header >
       <Navbar.Brand>
      <a href="#brand" style={{color:"white"}}><strong>Logical Fallacies Repo</strong></a>
       </Navbar.Brand>
       <Navbar.Toggle />
       </Navbar.Header>
        <Navbar.Collapse>
        <Nav >
        <NavItem eventKey={1} href="#">
        My frist link
        </NavItem>
      <NavItem eventKey={2} href="#">
        My Second Link
      </NavItem>
      <NavDropdown eventKey={3} title="See other links" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
  
    </Nav>
  </Navbar.Collapse>
</Navbar>


<section className="left-and-right">
<div className="halfs-container">
<div className="left-half">
  <article>
    <h1>Left Half</h1>
    <p>Life your life in a manner that reduces the unnecessary suffering of life. Life is suffering, there is no escape from that. Find the way of making that suffering less, in a productive, sustaining manner.</p>
  </article>
</div>
<div className="right-half">
  <article>
    <h1>Right Half</h1>
    <p>This is the right half of the page</p>
  </article>
</div>
</div>
</section>
      </section>
    );
  }
}

export default DoorComponentFile;
