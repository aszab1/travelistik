import axios from "axios"


export async function getBoards() {
  const boardList = await axios.get('/api/boards/')
  return boardList
}

export async function getSingleBoard(id) {
  const board = await axios.get(`/api/boards/${id}/`)
  return board 
}