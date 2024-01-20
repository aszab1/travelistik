import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { alignPropType } from 'react-bootstrap/esm/types'
import { activeUser } from '../utils/helpers/common'
import { getBoards } from '../utils/helpers/boardLoaders'



export default function Board() {

  const [ boards, setBoards]  = useState([])

  useEffect(() => {
    getBoards().then(response => {
      console.log(response.data)
      setBoards(response.data)
    });
  }, []);
  
  const userBoards = boards.filter(board => activeUser() === board.owner)

  return (
    <>
      <h3>Your Boards</h3>
      <Container fluid className='board'>
      <Row className='board-row'>
        {userBoards.map((board) => {
          const { id, image, city, country } = board
          
          
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
                style={{ backgroundImage: `url(${image})`}}>
                </div>
                <div>
                  <p>{city} {country}</p> 
                </div>
                  </section>
              </Col>
          )
        })}
      
        </Row>
      </Container>
      <div className="board-create">
      <p>{userBoards.length === 0 ? 'Create your first board' : 'Add a new board'}</p>
      <Link to="/boards/create" className="btn btn-primary">Create</Link>
    </div>
        
    </>
  )
}