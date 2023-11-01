import React, { useState } from 'react'
// import Table from "react-bootstrap/Table";
import Box from '@mui/material/Box'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
function TabularForm({ data }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  if (data === undefined) {
    data = []
  }
  const columns: GridColDef[] = [
    { field: 'id', headerName: '#', width: 50 },
    {
      field: 'date',
      headerName: 'Time',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'humidity',
      headerName: 'Humidity',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'temperature',
      headerName: 'Temperature',
      type: 'number',
      width: 200,
      editable: false,
    },
  ]

  const rows = data.map((value, i) => {
    return {
      id: i + 1,
      date: value.Date.substr(11, 5),
      humidity: value.Humidity,
      temperature: value.Temperature,
    }
  })
  return (
    <>
      {/* <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box> */}
      <br></br>
      <br></br>
      <center>
        <Button
          variant="primary"
          style={{
            width: '100px',
          }}
          className="btn btn-success mr-1 ml-1"
          onClick={handleShow}
        >
          Table
        </Button>
      </center>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="card-ab">
          <Modal.Title>Table</Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-ab">
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </Modal.Body>
      </Modal>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Humidity</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined ? (
            data.map((data, index) => (
              <tr data-index={index}>
                <td>{index + 1}</td>
                <td>{data.Date.substr(11, 5)}</td>
                <td>{data.Humidity}</td>
                <td>{data.Temperature}</td>
              </tr>
            ))
          ) : (
            <h5>Loading</h5>
          )}
        </tbody>
      </Table> */}
    </>
  )
}

TabularForm.defaultProps = {
  data: [],
}

export default TabularForm
