import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate} from "react-router-dom"

export default function PlaceCreate() {
  const res = useActionData()
  const navigate = useNavigate()


  useEffect(() => {
    if (res?.status === 201) {
      navigate('/boards/')
    }
  }, [res, navigate])


  const [formData, setFormData] = useState({
    placeName: '',
    placeDescription: '',
  })
  console.log(formData)
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Create a Board</h1>
      <Form className='form' method="POST">
        <label hidden htmlFor="placeName">Add a place</label>
        <input className="text" type="text" name="placeName" placeholder='Place' onChange={handleChange}/>
        <label hidden htmlFor="placeDescription">Place Description</label>
      <textarea name="placeDescription" placeholder='Place Description' onChange={handleChange}></textarea>
        <select>
          <option></option>
        </select>

        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button className="btn" type="submit">Create</button>
      </Form>
    </>
  )
}