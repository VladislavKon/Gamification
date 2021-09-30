import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';






const NavMenu = ({name, setName}) => {
  const [collapsed, setCollapsed] = useState(true);
  
  const logout = async () => {
    await fetch('http://localhost:4226/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });
    setName('');
  }

  function toggleNavbar(){
    setCollapsed(!collapsed);
  }

  let menu;
   if (!!name === false) { 
      menu = (
        <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/game">Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
            </NavItem>
          </ul>
      )
   } else {
     menu = (
      <ul className="navbar-nav flex-grow">
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/game">Map</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/login" onClick={logout}>Logout</NavLink>
      </NavItem>
    </ul>
     )
   }
  return(
    <header>
    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
      <Container>
        <NavbarBrand tag={Link} to="/">Gamification</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}  className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          {menu}
        </Collapse>
      </Container>
    </Navbar>
  </header>
  );
};

export default NavMenu;

/*
export class NavMenu extends Component {
  static displayName = NavMenu.name;
  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
// попробовать перепестать через useState 
  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Gamification</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/game">Map</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
*/