import DataIcons from './icons/DataIcons'
import LiveChart from '../components/LiveChart'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
const DataCards = ({ type, data, changePump, userPump }) => {
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      const [, ...temp] = chartData
      temp.push(data === undefined ? 0 : data)
      setChartData(temp)
    }, 3000)
    return () => clearInterval(interval)
  }, [chartData])

  const handleChange = (e) => {
    changePump()
  }

  let parameters
  let color
  let units

  if (type === 'water') {
    parameters = 'Moisture'
    color = '#646e95'
    units = '%'
    if (data === 1) {
      data = 'Present'
    } else if (data === 0) {
      data = 'None'
    }
  } else if (type === 'pump') {
    parameters = 'pump'
    color = '#F5AA07'
    units = ''
    if (data === 1) {
      data = 'On'
    } else if (data === 0) {
      data = 'Off'
    }
  } else if (type === 'temp') {
    parameters = 'temperature'
    color = '#b77f53'
    units = 'ºC'
  } else if (type === 'humid') {
    parameters = 'Humidity'
    color = '#58896b'
    units = '%'
  }

  return (
    <>
      <div className="mt-3 card-shape scale-up-center ">
        <div className="p-3">
          <DataIcons type={`${type}`} />
          <br />
          <h5 style={{ color: `${color}` }}>{parameters}</h5>

          <br />
          <h1>{data}</h1>
          <div id="units" style={{ color: `${color}` }}>
            {units}
          </div>
          {type === 'pump' ? (
            <Button
              className="mt-2 mb-2 btn btn-success"
              onClick={handleChange}
            >
              {userPump === 0 ? 'Off' : 'On'}
            </Button>
          ) : (
            <LiveChart data={chartData} color={color} />
          )}
        </div>
      </div>
    </>
  )
}

export default DataCards
