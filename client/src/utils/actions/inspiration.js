import axios from "axios"
import { formToObj, getToken } from "../helpers/common"
import { redirect } from "react-router-dom"

export async function createInspiration(request) {
  const data = await formToObj(request)
  console.log(data)
  return await axios.post('/api/inspirations/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function editInspiration(request, id) {
  const data = await formToObj(request)
  console.log(data)
  return await axios.put(`/api/inspirations/${id}/`, data, {
    validateStatus: () => true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteInspiration(id) {
  await axios.delete(`/api/inspirations/${id}/`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/home')
}