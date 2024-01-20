import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { removeToken } from "../utils/helpers/common"


export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'
  const isRegisterPage = location.pathname === '/register'


  const handleClick = (path) => {
    navigate(path)
  }

  const handleLogOut = () => {
    removeToken()
    navigate('/logout')
  }
  return (
    <>
      {!(isLoginPage || isRegisterPage) && (

        <>
          <Navbar className='navbar' bg='primary' data-bs-theme='dark'>
            <div className="logo">
            </div>
            <Container fluid style={{ paddingLeft: 0 }}>
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav>
                <Nav.Link as={Link} to='/boards'>Board</Nav.Link>
                </Nav>
                <Nav className='justify-content-end'>

                <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
                  </Nav>
                  </Nav>
                </Container>
              </Navbar></>

      )}
          </>

          )


}