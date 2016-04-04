import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/session';
import { Link } from 'react-router';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import { Navbar, Nav, NavItem, Button, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session, login, logout } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token && token !== null && typeof token !== 'undefined';
    const firstName = session.getIn(['user', 'firstName'], '');
    const lastName = session.getIn(['user', 'lastName'], '');

    let loggedInMenu = null;
    let loggedInSection = null;
    if (isLoggedIn) {
      loggedInMenu = <Nav>
        <IndexLinkContainer to="/" activeClassName="active">
          <NavItem>Counter</NavItem>
        </IndexLinkContainer> 
        <LinkContainer to="/about" activeClassName="active">
          <NavItem>About Us</NavItem>
        </LinkContainer>
      </Nav>;
      loggedInSection = <Nav pullRight>
        <NavItem>
          <b>{ `${ firstName } ${ lastName }` }</b>
        </NavItem>
        <NavItem onClick={ logout }>
          Logout
        </NavItem>
      </Nav>;
    }
    
    let body = null;
    if (isLoggedIn) {
      body = <div className="container-fluid">
        { children }
      </div>;
    }

    return (
      <div>
        <LoginModal
          onSubmit={ login }
          isPending={ session.get('isLoading', false) }
          hasError={ session.get('hasError', false) }
          isVisible={ !isLoggedIn } />
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Rangle.io</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          { loggedInMenu }
          { loggedInSection }
        </Navbar>
        {body}
      </div>
    );
  };
};