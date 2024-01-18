import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { alignPropType } from 'react-bootstrap/esm/types'


export default function Board({ boards }) {

  
  
  return (
    <>
      <h3>Your Boards</h3>
      <Container fluid className='board'>
      <Row className='board-row'>
        {boards && boards.map((board) => {
          const { id, image, city, country } = board
          console.log(board)
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
        })}
        </Row>
      </Container>
    </>
  )
}