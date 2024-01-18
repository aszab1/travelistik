import { useEffect } from "react"
import { Form, useActionData, useNavigate, useLoaderData} from "react-router-dom"

export default function BoardnEdit() {
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
        <label hidden htmlFor="city">Name</label>
        <input type="text" name="city" placeholder='City' defaultValue={board.city} />
        <label hidden htmlFor="country">Country</label>
        <input type="text" name="country" placeholder='Country' defaultValue={board.country}/>
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'defaultValue={board.description}></textarea>
        <label hidden htmlFor="image">Image</label>
        <input type="text" name="image" placeholder='Image' defaultValue={board.image}/>
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn" type="submit">Create</button>
      </Form>
    </>
  )
}