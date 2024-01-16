import { useLoaderData, Link } from "react-router-dom"

// Bootstrap
import { Card, Container } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion'

export default function SingleInspiration() {
  const selectedData = useLoaderData()
  const selectedInspiration = selectedData.data
  const owner = selectedData.data.owner.username
  const displayOwner = owner !== 'admin'
  
  

  const { id, image, city, country, description, places, likes, reviews} = selectedInspiration
  console.log(id, image, city, country, description, places, likes, owner, reviews)

  return (
    <>
    <div className="card">
      <img src={image} className="card-img-top" alt={city}></img>
      <div className="card-body">
        <h5 className="card-title">{city}, {country}</h5>
        {displayOwner && (
        <p>Created by user {owner}</p>
        )}
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {places.map((place) => (
        <li className="list-group-item" key={places}>
          <strong>Name:</strong> {place.name}<br />
                <strong>Description:</strong> {place.description}<br />
                <div></div>
                
          </li>
        ))}  
      </ul>

    </div>
    </>
  )
}



