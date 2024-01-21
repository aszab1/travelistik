import { useLoaderData, Link, Form } from "react-router-dom"
import { useState, useEffect } from "react"
import BoardNavBar from "./BoardNavBar"
import { getToken } from "../utils/helpers/common"
import axios from "axios"


// Bootstrap
import { Card } from "react-bootstrap"



export default function SingleBoard() {
  const { data } = useLoaderData();
  const { id, places = [], categories = [] } = data

  const [newPlace, setNewPlace] = useState({
    name: '',
    description: '',
    category: ''
  })

 

  const handleInputChange = (e) => {
    setNewPlace({ ...newPlace, [e.target.name]: e.target.value });
  };

  const handleAddPlace = (e) => {
    e.preventDefault()
    const url = `/api/boards/${id}/`

    axios.post(url, newPlace, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }

    })
    
    console.log(newPlace);
  };
  

  return (
    <>
      <BoardNavBar />
      <div>
        <h3>Your Board: {data.city}, {data.country}</h3>
        <Form onSubmit={handleAddPlace}>
          
          <select name="category" value={newPlace.category} onChange={handleInputChange}>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <button type="submit">Add Place</button>
        </Form>
      </div>
      
      {places.length > 0 && places.map((place, index) => (
        <Card key={index} className="h-100">
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
            
          </Card.Body>
        </Card>
      ))}
    </>
  )
}