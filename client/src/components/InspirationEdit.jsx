import { useEffect, useState } from "react"
import ImageUploadField from "./ImageUploadField"
import { Form, useActionData, useNavigate, useLoaderData} from "react-router-dom"
import { Input, Stack } from '@chakra-ui/react'

export default function InspirationEdit() {
  const res = useActionData()
  const navigate = useNavigate()
  const inspiration = useLoaderData() 


  useEffect(() => {
    if (res?.status === 200) {
      navigate('/home')
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    image: '',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="edit-div">
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