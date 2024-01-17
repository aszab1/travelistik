import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'
  const isRegisterPage = location.pathname === '/register'

  const handleClick = () => {
  navigate('/home')
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
                  <button type='button' className='btn btn-primary' id='/signout'>Sign out</button>
                  </Nav>
                  </Nav>
                </Container>
              </Navbar></>

      )}
          </>

          )


}