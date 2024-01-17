import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Register(){
  const res = useActionData()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  return (
    <>
    <h1>Register</h1>
    <Form className="form" method="POST">
    <input type="text" name="first_name" placeholder='First Name' />
    <input type="text" name="last_name" placeholder='Last Name' />
    <input type="text" name="username" placeholder='Username' />
    <input type="email" name="email" placeholder='Email' />
    <input type="password" name="password" placeholder='Password' />
    <input type="password" name="password_confirmation" placeholder='Password confirmation' />
    <button type="submit">Register</button>
    {res && <p className='danger'>{res.data.message}</p>} 
    </Form>
    </>
  )
}

