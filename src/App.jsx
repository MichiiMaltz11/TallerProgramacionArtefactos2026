import './App.css'

const hourlyForecast = [
  { time: 'Ahora', icon: '☀', temperature: 24 },
  { time: '12:00', icon: '☀', temperature: 26 },
  { time: '15:00', icon: '◐', temperature: 27 },
  { time: '18:00', icon: '☼', temperature: 23 },
  { time: '21:00', icon: '☾', temperature: 20 },
]

function App() {
  const formatTemperature = (temperature) => `${temperature}°`

  return (
    <div className="app-shell">
      <aside className="sidebar"><div className="brand"><span className="brand-mark">◒</span><span>Clima<span className="brand-accent">Lab</span></span></div><nav className="nav-list" aria-label="Navegacion principal"><a className="nav-item active" href="#dashboard"><span>⌂</span> Dashboard</a></nav><div className="sidebar-footer"><div className="status-dot"></div><div><strong>Sistema en linea</strong><small>Actualizado hace 2 min</small></div></div></aside>
      <main className="main-content" id="dashboard"><header className="topbar"><div><h1>Resumen del clima</h1></div></header><section className="location-row"><div><span className="location-pin">⌖</span><strong>San Salvador, El Salvador</strong><span className="unit-fixed">°C</span></div></section>
        <section className="dashboard-grid"><article className="current-weather card"><div className="weather-heading"><div><p className="label">CONDICIÓN ACTUAL</p><h2>Parcialmente nublado</h2></div><span className="weather-symbol">☀</span></div><div className="current-temperature">{formatTemperature(24)}<span>C</span></div><div className="temperature-range"><span>Min {formatTemperature(17)}</span><span className="range-line"></span><span>Max {formatTemperature(28)}</span></div><p className="weather-note">Sensación térmica de {formatTemperature(25)} · Viento suave del norte</p></article><article className="metric-card card"><div className="metric-icon blue">≈</div><div><p className="label">HUMEDAD</p><strong>58<span>%</span></strong><p className="metric-caption">Nivel confortable</p></div><div className="metric-ring ring-blue"><span>58%</span></div></article><article className="metric-card card"><div className="metric-icon yellow">☼</div><div><p className="label">LUZ SOLAR</p><strong>74<span>%</span></strong><p className="metric-caption">Radiación moderada</p></div><div className="metric-ring ring-yellow"><span>6.2 h</span></div></article><article className="forecast-card card" id="pronostico"><div className="card-header"><div><p className="label">TEMPERATURA RECIENTE</p><h2>Registro reciente</h2></div></div><div className="line-chart"><svg viewBox="0 0 600 190" role="img" aria-label="Gráfica lineal de temperatura reciente" preserveAspectRatio="none"><line className="chart-gridline" x1="0" y1="35" x2="600" y2="35" /><line className="chart-gridline" x1="0" y1="85" x2="600" y2="85" /><line className="chart-gridline" x1="0" y1="135" x2="600" y2="135" /><polyline className="chart-line" points="25,125 162,88 300,55 437,102 575,145" /><circle className="chart-point" cx="25" cy="125" r="5" /><circle className="chart-point" cx="162" cy="88" r="5" /><circle className="chart-point" cx="300" cy="55" r="5" /><circle className="chart-point" cx="437" cy="102" r="5" /><circle className="chart-point" cx="575" cy="145" r="5" /></svg><div className="chart-labels">{hourlyForecast.map((item) => <span key={item.time}>{item.time}<strong>{formatTemperature(item.temperature)}</strong></span>)}</div></div></article></section>
      </main>
    </div>
  )
}

export default App
