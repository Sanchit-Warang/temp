import React from 'react';
import { Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export const HealthCard = (props) => {
  // const [isPlant,setisPlant]=useState("Loading")

  // useEffect(()=>{
  //   if(props.data.is_plant){
  //     setisPlant(props)
  //   }
  // },[props.data])

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.data.is_plant ? (
        <>
          <Modal.Header closeButton className='card-ab '>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.data.health_assessment.is_healthy
                ? 'Your plant is healthy (is healthy probability:' +
                  props.data.health_assessment.is_healthy_probability
                    .toString()
                    .slice(2, 4) +
                  '%)'
                : 'Plant is not healthy (is healthy probability:' +
                  props.data.health_assessment.is_healthy_probability
                    .toString()
                    .slice(2, 4) +
                  '%)'}
            </Modal.Title>
          </Modal.Header >
          <Modal.Body className='card-ab '>
            {props.data.health_assessment.is_healthy ? (
              <>
                {
                  'Since your plant is healthy no health assessment test required. :-)'
                }
              </>
            ) : (
              <>
                <Row>
                  {
                    'We have 2 suggestions for the following image (ordered in terms of probability).'
                  }
                </Row>
                {/* <Row>
                  {'1)' +
                    props.data.health_assessment.diseases[0].name +
                    '(' +
                    props.data.health_assessment.diseases[0].disease_details
                      .description +
                    ')'}
                </Row>
                <Row>
                  {'2)' +
                    props.data.health_assessment.diseases[1].name +
                    '(' +
                    props.data.health_assessment.diseases[1].disease_details
                      .description +
                    ')'}
                </Row> */}
                {props.data.health_assessment.diseases
                .filter((a,i)=>{
        
        if (i<=1){
         return a
        }
      }).map((a,i)=>{
       return (<Row>
        {i+1+")" +
          a.name +
          '(' +
          a.disease_details
            .description +
          ')'}
      </Row>)
    })
      }
              </>
            )}
          </Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Not a plant!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Since this is not a plant cant do health assessment test.</p>
          </Modal.Body>
        </>
      )}
      {/* <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
    </Modal>
  );
};
