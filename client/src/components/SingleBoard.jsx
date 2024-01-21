import { useLoaderData, Link, Form } from "react-router-dom"


// Bootstrap
import { Card } from "react-bootstrap"



export default function SingleBoard() {
  const selectedData = useLoaderData()
  const selectedBoard = selectedData.data
  
  
  
  const { id, image, city, country, description, places } = selectedBoard
  console.log(selectedBoard)


  const groupedPlaces = {};
  places.forEach(place => {
    place.categories.forEach(category => {
      if (!groupedPlaces[category.name]) {
        groupedPlaces[category.name] = []
      }
      groupedPlaces[category.name].push(place)
    })
  })
  

  return (

          <div className="single-board">
            <p className="card-text">{description}</p>
        <Link className='btn' to={`/boards/${id}/edit`}
        style={{ backgroundColor: 'rgba(163, 190, 218, 0.6)', cursor: 'pointer', color: 'white' }}>Edit</Link>
        <Form method="POST">
          <button>Delete</button>
        </Form>
        
      
        </div>
  )
}