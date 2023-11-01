import React from "react";
import { Col, Row } from "react-bootstrap";
import BigGraph from "./BigGraph";
import TabularForm from "./TabularForm.tsx";

function Stats({ data }) {

  return (
    <>
      <Col ></Col>
      <Col>
      <Row className="scale-up-center" >
        <BigGraph data={data} /></Row>
        
        <Row className="scale-up-center">
        <TabularForm  data={data}/>
        </Row>
      </Col>
      <Col></Col>
    </>
  );
}

export default Stats;
