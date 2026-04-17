import React from 'react'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <div className="background-glow"></div>
      
      <main className="content">
        <h1 className="animated-text">
          pipeline trigger1
        </h1>
        
        <div className="status-badge">
          <span className="dot"></span>
          System Operational
        </div>
      </main>
    </div>
  )
}

export default App
