import React from 'react'
import { storage } from '../firebase'
import { ref as refer, getDownloadURL } from 'firebase/storage'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import DataIcons from './icons/DataIcons'
import Icon from './icons/Icon'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function PlantDetail({ photo }) {
  const [showCam, setShowCam] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      getDownloadURL(refer(storage, 'data/photo.jpg'))
        .then((url) => {
          setPhotoUrl(url)
        })
        .catch((error) => {
          // Handle any errors
        })
    }, 5000)
    return () => clearInterval(interval)
  }, [photoUrl])

  function handleCam() {
    if (showCam === false) {
      setShowCam(true)
    }
    if (showCam === true) {
      setShowCam(false)
    }
  }

  return (
    <>
      <Row className="pt-5"></Row>
      <Row className="justify-content-center">
        <DataIcons type="plant" />
        <div className="d-flex justify-content-center">
          <h3 className="pt-3">Plant Details</h3>
        </div>
        <hr className="line" />
      </Row>
      <Row className="d-flex justify-content-center">
        {showCam === true ? (
          <img
            alt=""
            src={photoUrl}
            style={{
              height: `200px`,
              width: `auto`,
            }}
          />
        ) : (
          <Icon icon_name="plant.png" h="200px" w="200px" />
        )}
      </Row>
      <center>
        <Button className="mt-2 mb-2 btn btn-success" onClick={handleCam}>
          {showCam === true ? 'Plant' : 'Camera'}
        </Button>{' '}
      </center>
      <Row className="box-row">
        <Col md={1}></Col>
        <Col md={5} className="fluid card-bg-1 bg-dark">
          <div className="p-3 text-white">
            <p>
              Banana leaves are large, flat leaves commonly used in tropical
              cuisines for wrapping and cooking food.
            </p>
          </div>
        </Col>
        <Col md={5} className="fluid bg-light">
          <div className="p-3 ">
            <p>
              They are also eco-friendly, biodegradable, and have cultural
              significance in various traditions.
            </p>
          </div>
        </Col>

        <Col md={1}></Col>
      </Row>
      <Row>
        <br />
        <br />
      </Row>
    </>
  )
}

export default PlantDetail
