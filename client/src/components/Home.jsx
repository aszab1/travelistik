import Inspirations from "./Inspirations"
import { useLoaderData } from "react-router-dom"

export default function Home(){

  const data = useLoaderData()
  console.log(data)
  const inspirations = data.data
  

  return (
    <>
    <h1>Home</h1>
    <Inspirations inspirations={inspirations} />
    </> 
  )
}