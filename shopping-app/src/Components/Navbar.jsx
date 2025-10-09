import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function CustomNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top">
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          SK <span>Traders</span>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto align-items-center">
            {/* Nav Links */}
            <Nav.Link as={Link} to="/" className="nav-link-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link-item">
              Products
            </Nav.Link>

            {/* Search Bar */}
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search fashion, electronics, accessories..."
              />
              <button className="search-btn">Search</button>
            </div>

            {/* ✅ Add Products Link */}
            <Nav.Link
              as={Link}
              to="/admin-homepage/add-products"
              className="add-product-btn"
            >
              + Add Products
            </Nav.Link>
          </Nav>

          {/* Profile Dropdown */}
          <Dropdown align="end" className="profile-dropdown">
            <Dropdown.Toggle variant="light" id="dropdown-account">
              <FaUserCircle size={22} style={{ marginRight: "6px" }} />
              Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/settings">
                Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
