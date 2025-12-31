import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Demo from './pages/Demo'
import Home from './pages/Home'
import Summary from './pages/summary/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Demo />} />
          <Route path="home" element={<Home />} />
          <Route path="summary" element={<Summary />} />
        </Route>
         <Route path="/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
