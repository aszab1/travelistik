import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { alignPropType } from 'react-bootstrap/esm/types'
import { getBoards } from '../utils/helpers/boardLoaders'
import { activeUser } from '../utils/helpers/common'



export default function Board() {

  const [boards, setBoards ] = useState([])

  useEffect(() => {
    getBoards().then(boards => setBoards(boards.data))
  }, [])
  console.log(boards)
  return (
    <>
      <h3>Your Boards</h3>
      <Container fluid className='board'>
      <Row className='board-row'>
        {boards && boards.map((board) => {
          const { id, image, city, country } = board
          {activeUser() === board.id &&  
            console.log(board.id)
          
          return (
            
              <Col as={Link} 
                key={id}
                s={2}
                md={3}
                lg={3}
                className='board-column text-decoration-none'
                to={`/boards/${id}`}
                >
                  <section className='boards'>
                <div className='board-div' 
                style={{ backgroundImage: `url(${image})` }} alt={city}>
                </div>
                <div>
                  <p>{city} {country}</p> 
                </div>
                  </section>
              </Col>
          )
        }})}
      
        </Row>
      </Container>
    </>
      
  )
}