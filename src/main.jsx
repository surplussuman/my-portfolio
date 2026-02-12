import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'
import Project5 from './pages/Project5'
import Project6 from './pages/Project6'
import Project7 from './pages/Project7'
import Project8 from './pages/Project8'
import Project9 from './pages/Project9'
import Project10 from './pages/Project10'
import Project11 from './pages/Project11'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Project2 />} />
        <Route path="/project/3" element={<Project3 />} />
        <Route path="/project/4" element={<Project4 />} />
        <Route path="/project/5" element={<Project5 />} />
        <Route path="/project/6" element={<Project6 />} />
        <Route path="/project/7" element={<Project7 />} />
        <Route path="/project/8" element={<Project8 />} />
        <Route path="/project/9" element={<Project9 />} />
        <Route path="/project/10" element={<Project10 />} />
        <Route path="/project/11" element={<Project11 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)