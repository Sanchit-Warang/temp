import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Icon from './icons/Icon'
import Col from 'react-bootstrap/Col'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TiHome } from 'react-icons/ti'
import { BsInfoSquareFill } from 'react-icons/bs'
import { ImStatsDots } from 'react-icons/im'
import { FaDisease } from 'react-icons/fa'
import { MdRecommend } from 'react-icons/md'
import { GiFertilizerBag } from "react-icons/gi";

function Sidebar() {
  //offcanvas states
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //Style variables

  const background = {
    backgroundColor: 'rgba(244,248,249,255)',
  }

  return (
    <>
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <GiHamburgerMenu className="nav-icons" onClick={handleShow} />
        </h1>
      </Col>
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink activeClassName="active-link" to="/">
            <TiHome className="nav-icons" />
          </NavLink>
        </h1>
      </Col>
      {/* <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink to="/aboutus">
            <BsInfoSquareFill className="nav-icons" />
          </NavLink>
        </h1>
      </Col> */}
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink to="/stats">
            <ImStatsDots className="nav-icons" />
          </NavLink>
        </h1>
      </Col>
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink to="/detection">
            <FaDisease className="nav-icons" />
          </NavLink>
        </h1>
      </Col>
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink to="/recommendation">
            <MdRecommend className="nav-icons" />
          </NavLink>
        </h1>
      </Col>
      <Col xs={2} md={1} className="text-color-primary">
        <h1>
          <NavLink to="/fertilizer">
            <GiFertilizerBag className="nav-icons" />
          </NavLink>
        </h1>
      </Col>
      <Offcanvas show={show} onHide={handleClose} style={{ width: '200px' }}>
        <Offcanvas.Header closeButton style={background}>
          <Offcanvas.Title>
            <Icon icon_name="logo.jpg" h="5rem" w="5rem" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="side">
          <Nav defaultActiveKey="/home" className="flex-column">
            <NavLink activeClassName="active-link" to="/">
              <Nav.Link className="link" href="/">
                Home
              </Nav.Link>
            </NavLink>
            <NavLink activeClassName="active-link" to="/stats">
              <Nav.Link className="link" href="/stats">
                Stats
              </Nav.Link>
            </NavLink>
            <NavLink activeClassName="active-link" to="/detection">
              <Nav.Link className="link" href="/detection">
                Detection
              </Nav.Link>
            </NavLink>
          <NavLink activeClassName="active-link" to="/aboutus">
              <Nav.Link className="link" href="/aboutus">
                Plant  Recommendation
              </Nav.Link>
            </NavLink>
            <NavLink activeClassName="active-link" to="/aboutus">
              <Nav.Link className="link" href="/aboutus">
                Fertilizer Recommendation
              </Nav.Link>
            </NavLink>
            </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
