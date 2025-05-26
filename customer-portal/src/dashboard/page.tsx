import { useState } from 'react'
import api from '../api'


function Dashboard() {
  const [inRide, setInRide] = useState(false)
  const [selectedScooter, setSelectedScooter] = useState<string | null>(null)
  const [parkLocation, setParkLocation] = useState('')

  const startRide = (scooterId: string) => {
    setInRide(true)
    setSelectedScooter(scooterId)
  }

const endRide = async () => {
  try {
    const response = await api.post<{ tripId: string }>('/trip/end', {
      scooterId: selectedScooter,
      location: parkLocation,
    })

    alert(`Ride ended. Trip ID: ${response.data.tripId}`)
    setInRide(false)
    setSelectedScooter(null)
    setParkLocation('')
  } catch (error) {
    alert('Failed to end ride.')
    console.error(error)
  }
}

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your balance: 200 kr</p>

      {!inRide && (
        <>
          <h2>Nearby Scooters:</h2>
          <ul>
            <li>Scooter #001 - Battery: 85% <button onClick={() => startRide('001')}>Start Ride</button></li>
            <li>Scooter #045 - Battery: 60% <button onClick={() => startRide('045')}>Start Ride</button></li>
            <li>Scooter #102 - Battery: 40% <button onClick={() => startRide('102')}>Start Ride</button></li>
          </ul>
        </>
      )}

      {inRide && (
        <div>
          <h2>🚲 You are riding scooter #{selectedScooter}</h2>
          <label>
            Select parking location:
            <select value={parkLocation} onChange={e => setParkLocation(e.target.value)}>
              <option value="">-- choose --</option>
              <option value="charging_station">Charging Station (Free)</option>
              <option value="random_place">Random Street (Penalty Fee)</option>
            </select>
          </label>
          <br /><br />
          <button onClick={endRide} disabled={!parkLocation}>End Ride</button>
        </div>
      )}
    </div>
  )
}

export default Dashboard
