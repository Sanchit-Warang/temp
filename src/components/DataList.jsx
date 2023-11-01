import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataCards from './DataCards';
const DataList = ({ data, changePump }) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={2}></Col>
        <Col sm={4}>
          <DataCards type="water" data={data.Moisture} />
        </Col>
        <Col sm={4}>
          <DataCards type="temp" data={data.Temperature} />
        </Col>
      </Row>
      <Row className=" justify-content-center">
        <Col sm={2}></Col>
        <Col sm={4}>
          <DataCards type="humid" data={data.Humidity} />
        </Col>
        <Col sm={4}>
          <DataCards
            type="pump"
            data={data.Pump}
            changePump={changePump}
            userPump={data.UserPump}
          />
        </Col>
      </Row>
    </>
  );
};

export default DataList;
