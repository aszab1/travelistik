import axios from "axios"
import { formToObj, getToken } from "../helpers/common"
import { redirect } from "react-router-dom"

export async function createBoard(request) {
  const data = await formToObj(request)
  console.log(data)
  return await axios.post('/api/boards/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  
}

export async function editBoard(request, id) {
  const data = await formToObj(request)
  console.log(data)
  return await axios.put(`/api/boards/${id}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteBoard(id) {
  await axios.delete(`/api/boards/${id}/`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/boards')
}
