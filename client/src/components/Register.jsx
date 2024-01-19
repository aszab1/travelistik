import { Form, useActionData, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Input, Stack } from '@chakra-ui/react'

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
    <div>
    <div className="register-div">
    <Form className="register-form" method="POST">
    <Stack spacing={3}>
  <Input variant='flushed' name="first_name" placeholder='First Name' />
  <Input variant='flushed' name="last_name" placeholder='Last Name' />
  <Input variant='flushed' name="username" placeholder='Username' />
  <Input variant='flushed' name="email" placeholder='Email' />
  <Input variant='flushed' name="password" placeholder='Password' />
  <Input variant='flushed' name="password_confirmation" placeholder='Password confirmation' />
  <button type="submit">Register</button>
    {res && <p className='danger'>{res.data.message}</p>} 
  </Stack>
  </Form> 
  </div>
  </div>
    </>
  )
}

