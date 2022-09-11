import React,{ useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/MainPage.css'
import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/search';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

  // set form input character rules with styled component
  const [search, setSearch] = useRecoilState(searchState);
  const [isActive, setIsActive] = useState(false);

  const onChangeInput = (e) => {
    setSearch(e.target.value);
    if(e.target.value.match(/[^a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)){
      setIsActive(true)
    }
    else {
      setIsActive(false);
    }
  }

  // set visibility of input field when click search button
  // const [isVisible, setVisibility] = useState(false);
  const searchInput = useRef();

  const toggleInput = (e) => {
    // setVisibility(e.target.value);
    if (searchInput.style.display === "block") {
      searchInput.style.display = "none";
  } else {
      searchInput.style.display = "block";
  }
  }

  // navigate to search result when click search button
  const navigate = useNavigate()
  const goToSearchResult = () => {
    navigate('/search')
  }

  return (
      <Navbar className={ color ? 'nav-colored' : 'nav'} fixed="top" expand="lg">
        <Container fluid className="container-fluid">
          <Navbar.Brand href="#home">
              <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link-active nav-link" href="#home">홈</Nav.Link>
              <Nav.Link className="nav-link" href="#link">시리즈</Nav.Link>
              <Nav.Link className="nav-link" href="#link">영화</Nav.Link>
              <Nav.Link className="nav-link" href="#link">NEW! 요즘 대세 콘텐츠</Nav.Link>
              <Nav.Link className="nav-link" href="#link">내가 찜한 콘텐츠</Nav.Link>
              <Nav.Link className="nav-link" href="#link">언어별로 찾아보기</Nav.Link>
              <Nav.Link className="nav-link" href="/main_weather">오늘 날씨에는 이런 콘텐츠!</Nav.Link>
            </Nav>
            <Form className="d-flex" value={search} onChange={onChangeInput}>
              <Form.Control
                className = "me-2 searchBar form-control"
                value={search}
                type="text"
              placeholder="제목, 사람, 장르"
                ref={searchInput}>
              </Form.Control>
              <SearchButton className = "btn-outline-success searchBtn" 
              onClick={toggleInput} 
              active={isActive} disabled={isActive ? true : false} variant="outline-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
              </SearchButton>
            </Form>
            <div className ="navbar_right">
              <Nav.Link className="nav-item-kids" href="#">
                키즈
              </Nav.Link>
              <div className="nav-item-notification">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path></svg> 
              </div>
              <div className = "nav-item-profile">
                <img src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt=""></img>
                <NavDropdown title="" id="navbarScrollingDropdown">
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
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
 };

const SearchButton = styled.button`
  color: ${props => props.active?'red':'white'};
`;

export default Navigation