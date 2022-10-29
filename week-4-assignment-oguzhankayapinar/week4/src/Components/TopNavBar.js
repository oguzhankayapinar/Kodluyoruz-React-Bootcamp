import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme}>
      <div className=" d-flex justify-content-between">
        <Navbar.Brand href="/">React Bootcamp Ödev</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/">Ana Sayfa</Nav.Link>
          <Nav.Link to="/products">Ürünler</Nav.Link>
          <Nav.Link to="/pricing">Fiyatlar</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="me-auto" onClick={toggleTheme}>
            <Button  variant="outline-success">Tema</Button>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default TopNavbar;