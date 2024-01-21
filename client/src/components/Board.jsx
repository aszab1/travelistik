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
    })
  }, [])
  
  const userBoards = boards.filter(board => activeUser() === board.owner)

  
    return (
      <>
        <Container fluid className='board' style={{ textAlign: 'center' }}> 
          <h3 className='board-text' style={{ display: 'inline-block' }}>Your Boards</h3>
  
          <Row className='board-row' style={{ marginTop: '20px' }}>
            {userBoards.map((board) => {
              const { id, image, city } = board
              
              return (
                <Col as={Link} 
                  key={id}
                  s={2}
                  md={3}
                  lg={4}
                  className='board-column text-decoration-none'
                  to={`/boards/${id}`}>
                  <div className='col boards'>
                    <div className='card'>
                      <img className='board-image' src={image} alt={city}/>
                      <div className='card-title'>{city}</div> 
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          <div className="board-create" style={{ display: 'inline-block', marginLeft: '20px' }}>
            <p className='button-text'>{userBoards.length === 0 ? 'Create your first board' : 'Add a new board'}</p>
            <Link to="/boards/create" className="btn btn-primary">Create</Link>
          </div>
        </Container>
      </>
    )
  }
  