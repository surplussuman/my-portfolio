import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './components/ToastContainer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ResumePage from './pages/ResumePage'
import EducationPage from './pages/EducationPage'
import AwardsPage from './pages/AwardsPage'
import ContactPage from './pages/ContactPage'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'
import Project5 from './pages/Project5'
import Project6 from './pages/Project6'
import Project7 from './pages/Project7'
import Project8 from './pages/Project8'
import Project9 from './pages/Project9'
// import Project10 from './pages/Project10' // retired: duplicated by the new AI Mock Interview & Proctoring Suite (id 13)
import Project11 from './pages/Project11'
import ProjectDetail from './pages/ProjectDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import AdminDashboard from './pages/AdminDashboard'
import BlogEditor from './pages/BlogEditor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/blog/new" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
            <Route path="/admin/blog/edit/:id" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
            <Route path="/project/1" element={<Project1 />} />
            <Route path="/project/2" element={<Project2 />} />
            <Route path="/project/3" element={<Project3 />} />
            <Route path="/project/4" element={<Project4 />} />
            <Route path="/project/5" element={<Project5 />} />
            <Route path="/project/6" element={<Project6 />} />
            <Route path="/project/7" element={<Project7 />} />
            <Route path="/project/8" element={<Project8 />} />
            <Route path="/project/9" element={<Project9 />} />
            {/* <Route path="/project/10" element={<Project10 />} /> retired: duplicated by the new AI Mock Interview & Proctoring Suite (id 13) */}
            <Route path="/project/11" element={<Project11 />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
)