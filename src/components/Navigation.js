import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/MainPage.css'
import { Button } from 'react-bootstrap';
// import { useEffect } from 'react';

const Navigation = () => {

  // change nav color when scrolling
  const[color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  // toggle search input when click
  // const[visible, setVisible] = useState(true);
  // const[width, setWidth] = useState(window.innerHeight);

  // const toggleVisibility = () => {
  //   setVisible(prev => !prev);
  // };

  // const toggleWidth = () => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   console.log(visible);
  //   window.addEventListener("resize", toggleWidth);
  //   width <= 600 ? setVisible(false) : setVisible(true);
  //   return () => {
  //     window.removeEventListener("resize", toggleWidth);
  //   };
  // }, [width]);

  return (
      <Navbar className={ color ? 'nav-colored' : 'nav'} fixed="top" expand="lg">
        <Container fluid className="container-fluid">
          <Navbar.Brand href="#home">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="#home">홈</Nav.Link>
              <Nav.Link className="nav-link" href="#link">시리즈</Nav.Link>
              <Nav.Link className="nav-link" href="#link">시리즈</Nav.Link>
              <Nav.Link className="nav-link" href="#link">영화</Nav.Link>
              <Nav.Link className="nav-link" href="#link">NEW! 요즘 대세 콘텐츠</Nav.Link>
              <Nav.Link className="nav-link" href="#link">내가 찜한 콘텐츠</Nav.Link>
              <Nav.Link className="nav-link" href="#link">언어별로 찾아보기</Nav.Link>
            </Nav>
            <Form className="d-flex searchBar">
                <Form.Control className="me-2" type="search" placeholder="Search" aria-label="Search"></Form.Control>
                <Button variant="outline-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
                </Button>
            </Form>
            <Nav.Link className="nav-item-kids" href="#">
                키즈
            </Nav.Link>
            <NavDropdown>

            </NavDropdown>
            <NavDropdown className="nav-item-profile" title="" id="navbarScrollingDropdown">
              <img className = "profile-icon" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt=""></img>
                <NavDropdown.Item href="#action3">
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
 };

export default Navigation