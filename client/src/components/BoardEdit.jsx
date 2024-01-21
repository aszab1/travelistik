import { useEffect, useState } from "react"
import { Form, useActionData, useNavigate, useLoaderData} from "react-router-dom"
import ImageUploadField from "./ImageUploadField"
import { Stack, Input } from "@chakra-ui/react"

export default function BoardEdit() {
  const res = useActionData()
  const navigate = useNavigate()
  const board = useLoaderData() 

  const [formData, setFormData] = useState({
    image: '',
  })
  console.log(formData)
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (res?.status === 200) {
      navigate('/boards')
    }
  }, [res, navigate])

  return (
      <div className="create-board">
      <Form className='form' method="POST">
      <Stack spacing={3}>
      <Input variant='outlined' name="city" placeholder='City' />
        <Input variant='outlined' name="country" placeholder='Country' />
        <label hidden htmlFor="description">Description</label>
        <textarea name="description" placeholder='Description'></textarea>
        <p>Upload an image below</p>
        <label hidden htmlFor="image">Image</label>
        <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
        <input className="upload" type="text" name="image" placeholder='Image' onChange={handleChange} hidden value={formData.image}  />
        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        <button type="submit">Edit</button>
        </Stack>
      </Form>
      </div>
  )
}