import React from 'react'
import { Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


export const FertilizerCard = (props) => {
const recommendations=[]


  return (
    <Modal
    show={props.show} 
    onHide={props.onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >
    <Modal.Header closeButton className='card-ab '>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.data.statement}
      {/* {(props.data.is_plant)?""+props.data.is_plant_probability.toString().slice(2,4)+"%":"It isn't a plant!"} */}
     
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='card-ab '>
      <><Row>{"We have few suggestions"}</Row>
      
      {props.data.recommendation[0]?<>{
          Object.keys(props.data.recommendation[0]).map((oneKey,i)=>{
            return (
                <Row key={i}>{i+1+") "+props.data.recommendation[0][oneKey]}</Row>
              )
          })
        }</>:<></>}
      
      </>
    </Modal.Body>
    
  </Modal>  )
}
