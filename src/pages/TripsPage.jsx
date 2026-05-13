import { useNavigate } from 'react-router-dom'

const TRIPS = [
  { id: 't1', title: 'Escapada a Roma', dates: '12 Oct - 16 Oct 2026', role: 'Creador', roleStyle: { background: '#1a1a1a', color: 'white' } },
  { id: 't2', title: 'Verano en Japón', dates: 'Proyectado para 2027', role: 'Invitado', roleStyle: { background: '#e5e7eb', color: '#111827' } },
]

export default function TripsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <header className="section-header">
        <h2>Mis Itinerarios</h2>
        <p>Viajes que has creado o a los que te han invitado.</p>
      </header>

      <div className="cards-grid">
        {TRIPS.map(trip => (
          <div
            key={trip.id}
            className="card"
            onClick={() => navigate('/viaje/nuevo', { state: { isGroup: false } })}
          >
            <div className="card-image placeholder-img">
              <span className="badge" style={trip.roleStyle}>{trip.role}</span>
            </div>
            <div className="card-content">
              <h3>{trip.title}</h3>
              <p>{trip.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
