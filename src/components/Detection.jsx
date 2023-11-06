import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import { PlantIdCard } from './PlantIdCard'
import { HealthCard } from './HealthCard'

export const Detection = () => {
  const [imgstatus, setImgStatus] = useState('Insert an image')
  const [file, setFile] = useState()
  const [plantIdentification, setPlantIdentification] = useState({})
  const [health, setHealth] = useState({})
  //function handling uploading image
  const hiddenFileInput = React.useRef(null)
  const handleClickUpload = () => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    // console.log("hello")
    const fileeee = event.target.files[0]
    var mimeType = fileeee.type

    if (mimeType.substring(0, 5) !== 'image') {
      setImgStatus('Please upload a image')
      return
    }

    setFile(URL.createObjectURL(fileeee))
    setImgStatus('Okay')
  }

  //Plant health assessment
  const [healthshow, setHealthShow] = useState(false)

  const handleHealthShow = () => {
    const files = [...document.querySelector('input[type=file]').files]
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const res = event.target.result
          resolve(res)
        }
        reader.readAsDataURL(file)
      })
    })

    Promise.all(promises).then((base64files) => {
      const data = {
        api_key: 'dLNHhgCRk6Oiv7wvgeakL4SEyiauzjkxI7oJoTHhBBo2iFcp9d',
        images: base64files,
        // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
        modifiers: ['crops_fast', 'similar_images'],
        language: 'en',
        // disease details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Disease-details
        disease_details: [
          'cause',
          'common_names',
          'classification',
          'description',
          'treatment',
          'url',
        ],
      }

      fetch('https://api.plant.id/v2/health_assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
          setHealth(data)
          setHealthShow(true)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    })
  }

  //Plant identification functionalities
  const [idshow, setIdShow] = useState(false)

  const handleIdShow = () => {
    const files = [...document.querySelector('input[type=file]').files]
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (event) => {
          const res = event.target.result
          resolve(res)
        }
        reader.readAsDataURL(file)
      })
    })

    Promise.all(promises).then((base64files) => {
      const data = {
        api_key: 'KflHIg2Tstn7ZyBVJtzlmXl4F7oElTU0L9tuNdxy73qk9YVLJK',
        images: base64files,
        // modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers
        modifiers: ['crops_fast', 'similar_images'],
        plant_language: 'en',
        // plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details
        plant_details: [
          'common_names',
          'url',
          'name_authority',
          'wiki_description',
          'taxonomy',
          'synonyms',
        ],
      }

      fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
          setPlantIdentification(data)
          setIdShow(true)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    })
  }

  return (
    <>
      <Card
        className="mx-auto mt-6 card-ab scale-up-center"
        style={{ width: '80%' }}
      >
        <center>
          <br></br>
          <div
            className="img-holder"
            style={{ width: '300px', height: '256px' }}
          >
            <img
              alt=""
              src={file}
              style={{ width: '300px', height: '256px', objectFit: 'cover' }}
              accept="image/*"
            />
          </div>
        </center>
        <Card.Body>
          {/* ........ */}
          <Card.Title>
            <center>
              <div>{imgstatus}</div>
            </center>
          </Card.Title>
          {/* ................. */}
          <Row>
            <center>
              <Button
                className="btn btn-success mr-1 ml-1"
                variant="primary"
                onClick={handleClickUpload}
              >
                Upload Image
              </Button>

              <input
                type="file"
                style={{ display: 'none' }}
                ref={hiddenFileInput}
                onChange={handleChange}
              />
            </center>
          </Row>
          {/*  */}
          <Row>
            <center style={{ padding: '5px' }}>
              <Button
                className="btn btn-success mr-1 ml-1"
                variant="primary"
                onClick={handleIdShow}
              >
                Identify Plant
              </Button>{' '}
              <Button
                className="btn btn-success mr-1 ml-1"
                variant="primary"
                onClick={handleHealthShow}
              >
                Health Assessment
              </Button>
            </center>
          </Row>
        </Card.Body>
      </Card>
      <PlantIdCard
        show={idshow}
        onHide={() => {
          setIdShow(false)
        }}
        data={plantIdentification}
      />

      <HealthCard
        show={healthshow}
        onHide={() => {
          setHealthShow(false)
        }}
        data={health}
      />
    </>
  )
}
