import { useEffect } from "react"
import { Form, useActionData, useNavigate, useLoaderData} from "react-router-dom"

export default function PlaceEdit() {
  const res = useActionData()
  const navigate = useNavigate()
  const board = useLoaderData() 


  useEffect(() => {
    if (res?.status === 200) {
      navigate('/boards')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Edit Board</h1>
      <Form className='form' method="POST">
        <input type="text" name='placeName'/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
        <select>
          <option></option>
        </select>
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn" type="submit">Create</button>
      </Form>
    </>
  )
}