import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavbarMain() {
  const loginReducer = useSelector(state => state.loginReducer);
  const signout = () => {

    localStorage.clear();

    window.location.href = "/";
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow p-3 mb-5 " bg="light" data-bs-theme="light">
      <div className="container">
      <Navbar.Brand>My Markdown</Navbar.Brand>

      {loginReducer.isLoggedIn ? (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/blog">Blogs</Link>
              <Link className="nav-link" to="/Dashboard">Dashboard</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <NavDropdown title={<i className="fa-solid fa-user fa-2x"></i>} id="basic-nav-dropdown">
                 <NavDropdown.Item><Link style={{ color: "black" }} to="/profile">Profile</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2"><button className="btn btn-danger" onClick={signout}>sign out</button></NavDropdown.Item>
              
              </NavDropdown>
            {/* <Link style={{ color: "black" }} to="/profile" className="nav-link ml-auto">
              <div><i className="fa-solid fa-user fa-2x"></i></div>
            </Link> */}
          </Navbar.Collapse>
        </>
      ) : (
        <Link style={{ color: "black" }} to="/login">
          <div className="ml-auto">
            <button className="btn btn-primary">Login</button>
          </div>
        </Link>
      )}
      </div>
    </Navbar>
  );
}

export default NavbarMain;
