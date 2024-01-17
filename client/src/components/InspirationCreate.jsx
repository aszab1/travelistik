import { useEffect } from "react"
import { Form, useActionData, useNavigate} from "react-router-dom"

export default function InspirationCreate() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/home')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Create Inspiration</h1>
      <Form className='form' method="POST">
        <label hidden htmlFor="city">Name</label>
        <input type="text" name="city" placeholder='City' />
        <label hidden htmlFor="country">Country</label>
        <input type="text" name="country" placeholder='Country' />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
        <label hidden htmlFor="image">Image</label>
        <input type="text" name="image" placeholder='Image' />
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn" type="submit">Create</button>
      </Form>
    </>
  )
}