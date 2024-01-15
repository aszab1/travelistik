import axios from "axios"
import { formToObj } from "../helpers/common"

export async function registerUser(request){
  const data = await formToObj(request)
  return await axios.post('/auth/register/', data, {
    validateStatus: () => true
  })
}

export async function loginUser(request){
  const data = await formToObj(request)
    return await axios.post('/auth/login/', data, {
    validateStatus: () => true
  })
}
