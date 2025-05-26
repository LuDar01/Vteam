import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/page'
import History from './history/page'
import Topup from './topup/page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/topup" element={<Topup />} />
      </Routes>
    </Router>
  )
}

export default App
