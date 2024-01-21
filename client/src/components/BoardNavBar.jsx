import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Form } from 'react-router-dom'
import { useNavigate, useLocation, useLoaderData, Link } from 'react-router-dom'
import { removeToken } from "../utils/helpers/common"

export default function BoardNavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  // const isLoginPage = location.pathname === '/login'
  // const isRegisterPage = location.pathname === '/register'

  const selectedData = useLoaderData()
  const selectedBoard = selectedData.data
  
  
  
  const { id, image, city, country, description, places } = selectedBoard


  const handleLogOut = () => {
    removeToken()
    navigate('/logout')
  }

  return (
<>
<ul className="nav nav-tabs">
  <li className="nav-item">
  <Link to={`/boards/${id}/edit`} className="nav-link active" aria-current="page">Edit Board</Link>
  </li>
  <Form method="POST" className="nav-link active" aria-current="page">Delete Board</Form>
  <li>
  <Link onClick={handleLogOut} className="nav-link active" aria-current="page">Logout</Link>
  </li>
  <li>

  </li>
  </ul>
</>
  )
}