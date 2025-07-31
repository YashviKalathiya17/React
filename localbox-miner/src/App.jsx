import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>🚀 Localbox Miner</h1>
        <p>Your local data mining companion</p>
      </header>

      <main>
        <section className="card">
          <h2>System Status</h2>
          <p>CPU Usage: 25%</p>
          <p>Disk I/O: Moderate</p>
          <p>Status: Running</p>
        </section>

        <section className="card">
          <h2>Mining Logs</h2>
          <ul>
            <li>[10:01 AM] Mining started...</li>
            <li>[10:05 AM] Block found!</li>
            <li>[10:10 AM] Hash rate steady</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Localbox Miner. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
