import axios from "axios"
import { getToken } from "./common"


export async function getBoards() {
  return await axios.get('/api/boards/', {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}


export async function getSingleBoard(id) {
  return await axios.get(`/api/boards/${id}/`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

