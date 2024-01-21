import axios from "axios"



export async function getInspirations() {
  const inspirationsTable = await axios.get('/api/inspirations/')
  
  return inspirationsTable
}

export async function getSingleInspiration(id) {
  const inspiration = await axios.get(`/api/inspirations/${id}/`)
  return inspiration
}


