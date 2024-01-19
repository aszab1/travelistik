import axios from "axios"
import { formToObj, getToken } from "../helpers/common"


export async function getInspirations() {
  const inspirationsTable = await axios.get('/api/inspirations/')
  
  return inspirationsTable
}

export async function getSingleInspiration(id) {
  const inspiration = await axios.get(`/api/inspirations/${id}/`)
  return inspiration
}

// export async function getSingleInspiration(request, id) {
//   const data = await formToObj(request)
//   console.log(data)
//   return await axios.get(`/api/inspirations/${id}/`, data, {
//     validateStatus: () => true,
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })
// }


