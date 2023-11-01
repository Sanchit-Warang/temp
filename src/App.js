import { db } from './firebase'
import { ref, onValue, set } from 'firebase/database'
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DataList from './components/DataList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PlantDetail from './components/PlantDetail'
import Stats from './components/Stats'
import AboutUs from './components/AboutUs'
import { Detection } from './components/Detection'
import PlantRecommendation from './components/PlantRecommendation'
import FertilizerRecommendation from './components/FertilizerRecommendation'

function App() {
  //Firebase data
  const [data, setData] = useState({})

  //Sheets data
  const [sheets, setSheets] = useState([])
  //getSheetsData
  const getSheetsData = async () => {
    const response = await fetch(
      // 'http://localhost:8081/api/getDetails'
      "https://script.googleusercontent.com/a/macros/somaiya.edu/echo?user_content_key=-qgicEEHhSuUqG13H7qxzLZ5w7mSPjTwbvirAto1FNmVsVyRMFZKiDWZiN0Ff9m7GZUIDAXqpC4KcW1adcoMM-3ZpSoEjvikOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKCGh-LXhT3WE4PNb3pkaLNN1X4897iSixZvgKfsSYwel--PUtzflThnyzi6DFj0uDOpzcLGcS2TKnodTowxmuBqh9ujNDyM-Qx56RTezlI1UN0NYVEcTJtMpS0KNHdFtkg&lib=MloTWJqbkEfscCIs94IfnzfglxxFqmn7r"
    )
    const data = await response.json()
    return data
  }

  const changePump = async () => {
    if (data.UserPump === 0) {
      await set(ref(db, 'UserPump/'), 1)
    } else {
      await set(ref(db, 'UserPump/'), 0)
    }
  }

  //background color style
  const right_side = {
    backgroundColor: 'black',
    height: '100vh',
  }

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val()
      setData(data)
    })
    getSheetsData().then((data) => {
      // console.log(data)
      setSheets(data)
    })
  }, [])

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="justify-content-center pt-0 navbar ">
              <Sidebar />
            </Row>
            <Row className="pt-2">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<DataList data={data} changePump={changePump} />}
                />
                <Route exact path="/stats" element={<Stats data={sheets.data} />} />
                {/* <Route exact path="/aboutus" element={<AboutUs />} /> */}
                <Route exact path="/detection" element={<Detection />} />
                <Route exact path="/recommendation" element={<PlantRecommendation/>} />
                <Route exact path="/fertilizer" element={<FertilizerRecommendation/>} />
              </Routes>
            </Row>
          </Col>

          <Col sm={3} className='bg-primary'>
            <PlantDetail />
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
