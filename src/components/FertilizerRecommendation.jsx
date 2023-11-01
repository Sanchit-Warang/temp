import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row, Col } from 'react-bootstrap'
import { FertilizerCard } from './FertilizerCard'

const FertilizerRecommendation = () => {
  const [result, setResult] = useState({ recommendation: [] })
  const [resultmodal, setResultModal] = useState(false)
  const [error, setError] = useState('')

  const handleClose = () => setResultModal(false)
  const handleShow = () => setResultModal(true)
  return (
    <>
      {' '}
      <Card
        className="mx-auto mt-6 card-ab scale-up-center"
        style={{ width: '80%' }}
      >
        <Row>
          <Formik
            initialValues={{
              N: 0,
              P: 0,
              K: 0,
              temp: 0,
              humidity: 0,
              ph: 0,
              rainfall: 0,
              model: 'svm',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const okay = await fetch(
                // `http://127.0.0.1:5000/fertilizer?cropname=${values.crop}&nitrogen=${values.N}&phosphorous=${values.P}&potassium=${values.K}`
                `https://pmsrecommender.onrender.com/fertilizer?cropname=${values.crop.toLowerCase()}&nitrogen=${
                  values.N
                }&phosphorous=${values.P}&pottasium=${values.K}`,
                { mode: 'cors' }
              )
              console.log(okay)
              if (okay.status === 400) {
                setError(
                  'The crop is not in our dataset we will make sure to add it as soon as possible'
                )
                setSubmitting(false)
              } else {
                const kk = await okay.json()

                setResult(kk)
                handleShow()
                console.log(kk)
                setSubmitting(false)
                setError('')
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="slide-in-left">
                <Row>
                  <Col>
                    <div className="form-group row p-2">
                      <label className="col-form-label">Nitrogen(N)</label>
                      <Field
                        type="number"
                        className="form-control input-bg"
                        name="N"
                      />
                    </div>
                  </Col>
                  {/* <ErrorMessage name="email" component="div" /> */}
                  <Col>
                    <div className="form-group row p-2">
                      <label className="col-form-label">Phosporous(P)</label>
                      <Field
                        type="number"
                        className="form-control input-bg"
                        name="P"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="form-group row p-2">
                      <label className="col-form-label">Potasium(K)</label>
                      <Field
                        type="number"
                        className="form-control input-bg"
                        name="K"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group row p-2">
                      <label className="col-form-label">Crop</label>
                      <Field
                        type="String"
                        className="form-control input-bg"
                        name="crop"
                      />
                    </div>
                  </Col>
                </Row>

                {/* <ErrorMessage name="password" component="div" /> */}
                <div className="mx-auto pt-1 pb-1">
                  <center>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </center>
                </div>
              </Form>
            )}
          </Formik>
        </Row>
        <div>{error ? error : ''}</div>
      </Card>
      <FertilizerCard
        show={resultmodal}
        onHide={() => {
          setResultModal(false)
        }}
        data={result}
      />
    </>
  )
}

export default FertilizerRecommendation
