import { useEffect } from "react"
import { Form, useActionData, useNavigate } from "react-router-dom"


export default function Login() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 202) {
      setToken(res.data.token)
      navigate('/home')
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