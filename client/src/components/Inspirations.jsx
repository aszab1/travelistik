
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Inspirations({ inspirations }) {

  return (
    <>
      <h3>Travel Inspirations</h3>
      <Container fluid>
      <Row className='inspo-row'>
        {inspirations && inspirations.map((inspo) => {
          const { id, image, city, country } = inspo
          return (
            
              <Col key={id}
                xs={3}
                md={3}
                lg={3}
                className='inspo-column'>
                  <section>
                <div className='inspo-div' style={{ backgroundImage: `url(${image})` }}>
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