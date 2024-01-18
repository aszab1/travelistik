import { useEffect } from "react"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { setToken } from "../utils/helpers/common"


export default function Login() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      navigate('/home')
      console.log(res.data)
    }
  }, [res, navigate])
  return (
    <div>
      <div>
        <Form className="login-form" method="POST">
          <div>
          <input type="text" name="username" placeholder='Username' />
          <input type="password" name="password" placeholder='Password' />
          <button type="submit">Login</button>
          {res && <p className='danger'>{res.data.message}</p>}
          </div>

        </Form>
      </div>
    </div>
  )
}