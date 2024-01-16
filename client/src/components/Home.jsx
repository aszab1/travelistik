import Inspirations from "./Inspirations"
import { useLoaderData } from "react-router-dom"

export default function Home(){

  const data = useLoaderData()
  console.log(data)
  const inspirations = data.data
  

  return (
    <>
    <Inspirations inspirations={inspirations} />
    </> 
  )
}