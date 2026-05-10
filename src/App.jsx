import { Route, Routes } from 'react-router-dom'
import CursorEffect from './components/CursorEffect'
import HomePage from './components/HomePage'
import PortfolioDetailPage from './components/PortfolioDetailPage'
import ScrollToHash from './components/ScrollToHash'
import './App.css'

function App() {
  return (
    <>
      <CursorEffect />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
      </Routes>
    </>
  )
}

export default App