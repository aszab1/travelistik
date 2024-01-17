import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { alignPropType } from 'react-bootstrap/esm/types'


export default function Inspirations({ inspirations }) {

  return (
    <>
      <h3>Travel Inspirations</h3>
      <Container fluid className='ispo'>
      <Row className='inspo-row'>
        {inspirations && inspirations.map((inspo) => {
          const { id, image, city, country } = inspo
          return (
            
              <Col as={Link} 
                key={id}
                s={2}
                md={3}
                lg={3}
                className='inspo-column text-decoration-none'
                to={`/home/${id}`}
                              >
                  <section className='inspiration'>
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

      <Container className="sidebar-container" fluid>
        <Row>
          <Col md={8} className="main-content">
          </Col>
          <Col md={4} className="sidebar">
            <div className="sidebar-message">
              <p>Do you have a destination you want to share with the world?</p>
              <Link to="/home/create" className="btn btn-primary">Share Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}