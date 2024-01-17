import { useNavigate } from 'react-router-dom'
import { removeToken } from '../utils/helpers/common'
import { useEffect, useState } from 'react'



export default function Logout () {
  const navigate = useNavigate()
  
  useEffect(() => { 

  handleLogOut()

  }, [])
  
  const handleLogOut = async () => {
    removeToken()
    setShowMessage(true)
    await new Promise((set) => setTimeout(set, 1000))
    
    navigate('/')
  }
  const [showMessage, setShowMessage] = useState(false)

return (
  <div>
  {showMessage ? 
  <div>You have been signed out, please login</div>
  : null}
  </div>
)
}