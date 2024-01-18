import { useLoaderData, Link, Form } from "react-router-dom"
import { activeUser } from "../utils/helpers/common"

// Bootstrap
import { Card, Container } from "react-bootstrap"



export default function SingleInspiration() {
  const selectedData = useLoaderData()
  const selectedInspiration = selectedData.data
  const owner = selectedData.data.owner.username
  const displayOwner = owner !== 'admin'
  
  
  const { id, image, city, country, description, places, likes, reviews } = selectedInspiration
  console.log(selectedInspiration)

  console.log((activeUser()));
  console.log(selectedInspiration.owner.id)

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
    <>
    <div className="card">
      <img src={image} className="card-img-top" alt={city}></img>
      <div className="card-body">
        <h5 className="card-title">{city}, {country}</h5>
        {displayOwner && (
        <p>Created by user {owner}</p>
        )}
        {/* {activeUser() === selectedInspiration.owner.id &&  */}
          
          <>
        <Link to={`/home/${id}/edit`}>Edit</Link>
        <Form method="POST">
          <button>Delete</button>
        </Form>
        
        </>
      {/* } */}
      
      </div>
      
        <p className="card-text">{description}</p>
      </div>
      {Object.entries(groupedPlaces).map(([category, categoryPlaces], index) => (
          <div key={index}>
            <h3>{category}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {categoryPlaces.map((place, placeIndex) => (
                <div className="col" key={placeIndex}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{place.name}</Card.Title>
                      <Card.Text>{place.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Leave a Review</small>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      
    </>
  )
}



