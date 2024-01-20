import { useEffect } from "react"
import { setToken } from "../utils/helpers/common"
import { Form, useActionData, useNavigate } from "react-router-dom"
import { Input, Stack } from '@chakra-ui/react'


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
    
      <div className="login-div">
        <Form className="login-form" method="POST">
        <Stack spacing={3}>
          
        <Input variant='flushed' name="username" placeholder='Username' />
        <Input variant='flushed' type='password' name="password" placeholder='Password' />
          <button type="submit">Login</button>
          {res && <p className='danger'>{res.data.detail}</p>}
          </Stack>

        </Form>
      </div>
    
  )
}