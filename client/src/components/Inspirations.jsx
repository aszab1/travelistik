import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { alignPropType } from 'react-bootstrap/esm/types'


export default function Inspirations({ inspirations }) {

  return (
    <>
      <h3>Travel Inspirations</h3>
      <Container fluid>
      <Row className='inspo-row'>
        {inspirations && inspirations.map((inspo) => {
          const { id, image, city, country } = inspo
          return (
            
              <Col as={Link} 
                key={id}
                xs={3}
                md={3}
                lg={3}
                className='inspo-column'
                to={`/home/${id}`}>
                  <section>
                <div className='inspo-div' 
                style={{ backgroundImage: `url(${image})` }} alt={city}>
                </div>
                <div>
                  <p>{city}, {country}</p> 
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