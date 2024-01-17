import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import { getToken, removeToken } from "../utils/helpers/common"
import { activeUser } from "../utils/helpers/common"

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'
  const isRegisterPage = location.pathname === '/register'


  const handleClick = () => {
  navigate('/home')
  }

  const handleLogOut = () => {
    removeToken()
    navigate('/logout')
  }
  return (
    <>
      {!(isLoginPage || isRegisterPage) && (

        <>
          <Navbar className="navbar" bg="primary" data-bs-theme="dark">
            <div className="logo">
            </div>
            <Container fluid style={{ paddingLeft: 0 }}>
              <Nav className="me-auto">
                <Nav.Link onClick={handleClick}><button type='button' className='btn btn-primary' id='/home'>Home</button></Nav.Link>
                <Nav className='justify-content-end'>
                <Nav.Link onClick={handleLogOut}><button type='button' className='btn btn-primary' id='/signout'>Logout</button></Nav.Link>
                  </Nav>
                  </Nav>
                </Container>
              </Navbar></>

      )}
          </>

          )


}