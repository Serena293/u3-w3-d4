// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ArticleDetail from './components/ArticleDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/detail/:id"
              element={<ArticleDetail/>}
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App