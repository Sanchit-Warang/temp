import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row, Col } from 'react-bootstrap'

const PlantRecommendation = () => {
  const [crop, setCrop] = useState()

  return (
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
          //  validate={values => {
          //    const errors = {};
          //    if (!values.email) {
          //      errors.email = 'Required';
          //    } else if (
          //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //    ) {
          //      errors.email = 'Invalid email address';
          //    }
          //    return errors;
          //  }}
          onSubmit={async (values, { setSubmitting }) => {
            const okay = await fetch(
              `https://pmsrecommender.onrender.com/predict?n=${values.N}&p=${values.P}&k=${values.K}&temperature=${values.temp}&humidity=${values.humidity}&ph=${values.ph}&rainfall=${values.rainfall}`
              // http://127.0.0.1:5000
            )
            const kk = await okay.json()
            console.log(kk)
            setCrop(kk)
            setSubmitting(false)

            //  setTimeout(() => {
            //   //  alert(JSON.stringify(values, null, 2));

            //    console.log(values)
            //    setSubmitting(false);
            //  }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="slide-in-left">
              <Row>
                <Col>
                  <div className="form-group row p-2">
                    <label className="col-form-label">Nitrogen</label>
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
                    <label className="col-form-label">Phosporous</label>
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
                    <label className="col-form-label">Temp</label>
                    <Field
                      type="number"
                      className="form-control input-bg"
                      name="temp"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group row p-2">
                    <label className="col-form-label">Humidity</label>
                    <Field
                      type="number"
                      className="form-control input-bg"
                      name="humidity"
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group row p-2">
                    <label className="col-form-label">ph</label>
                    <Field
                      type="number"
                      className="form-control input-bg"
                      name="ph"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group row p-2">
                    <label className="col-form-label">rainfall</label>
                    <Field
                      type="number"
                      className="form-control input-bg"
                      name="rainfall"
                    />
                  </div>
                </Col>
                <Col>
                  {/* <div className="form-group row p-2">
                    <label className="col-form-label">model</label>
                    <Field
                      as="select"
                      className="form-select input-bg"
                      name="model"
                    >
                      <option value="rf">Random Forest</option>
                      <option value="dt">Deceision tree</option>
                      <option value="svm">SVM</option>
                    </Field>
                  </div> */}
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
      <div className="mx-auto pt-4 pb-1">
        <center>
          {crop && (
            <div>
              Most suitable crop is <h5 className="p">{crop.crop}</h5>
            </div>
          )}
        </center>
      </div>
    </Card>
  )
}

export default PlantRecommendation
