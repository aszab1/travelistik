import axios from "axios"


export async function getInspirations() {
  const inspirationsTable = await axios.get('/api/inspirations/')
  return inspirationsTable
}
