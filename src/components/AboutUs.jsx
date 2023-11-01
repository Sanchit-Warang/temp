import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Icon from './icons/Icon'
const AboutUs = () => {
  return (
    <Card
      className="mx-auto mt-6 card-ab scale-up-center"
      style={{ width: '80%' }}
    >
      <center>
        <br></br>
        <Icon icon_name="group.jpeg" h="342px" w="256px" className="mx-auto" />
      </center>
      <Card.Body>
        <Card.Title>
          <h3>About Us</h3>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laboriosam dolor est dolore possimus! Eius deserunt
          facere tempore dolores iste. Excepturi, at iure est expedita et ad
          voluptatibus natus eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis, ab? Fugit, dolorum cupiditate accusantium
          iure quas modi vitae consectetur necessitatibus ex facilis optio. Enim
          perferendis tempore deleniti quae temporibus iste.
        </Card.Text>
        <center>
          <a
            href="https://github.com/sanjayjogi/Plant-Monitoring-System"
            target="_blank"
            style={{ color: '#e0f9e2' }}
          >
            <Button className="btn btn-success mr-1 ml-1" variant="primary">
              Front End
            </Button>{' '}
          </a>
          <Button className="btn btn-success mr-1 ml-1" variant="primary">
            Servers
          </Button>{' '}
          <Button className="btn btn-success mr-1 ml-1" variant="primary">
            Hardware
          </Button>
        </center>
      </Card.Body>
    </Card>
  )
}

export default AboutUs
