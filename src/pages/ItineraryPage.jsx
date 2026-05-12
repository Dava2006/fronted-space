import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TextBlock from '../components/blocks/TextBlock'
import FlightBlock from '../components/blocks/FlightBlock'
import HotelBlock from '../components/blocks/HotelBlock'
import RouteBlock from '../components/blocks/RouteBlock'

const DRAWER_ITEMS = [
  { id: 'd1', type: 'flight', label: 'Vuelo IB3130 (Madrid - París)' },
  { id: 'd2', type: 'hotel', label: 'Hotel Le París' },
]

export default function ItineraryPage() {
  const { state } = useLocation()
  const isGroup = state?.isGroup ?? false

  const [blocks, setBlocks] = useState([
    { id: 'block-init', type: 'text', dayNumber: 1 },
  ])
  const [dayCounter, setDayCounter] = useState(1)

  function addBlock(type) {
    const id = `block-${Date.now()}`
    if (type === 'text') {
      const nextDay = dayCounter + 1
      setDayCounter(nextDay)
      setBlocks(prev => [...prev, { id, type: 'text', dayNumber: nextDay }])
    } else {
      setBlocks(prev => [...prev, { id, type }])
    }
  }

  function renderBlock(block) {
    switch (block.type) {
      case 'text':
        return <TextBlock key={block.id} dayNumber={block.dayNumber} />
      case 'flight':
        return <FlightBlock key={block.id} />
      case 'hotel':
        return <HotelBlock key={block.id} />
      case 'route':
        return <RouteBlock key={block.id} />
      default:
        return null
    }
  }

  return (
    <div className="itinerary-view">
      <div className="cover-image-container">
        <div className="placeholder-cover"></div>
        <button className="btn-change-cover">
          <i className="ph ph-image"></i> Cambiar portada
        </button>
      </div>

      <div className="editor-document">
        <div className="trip-header-meta">
          <h1
            className="trip-title"
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Título del viaje (Ej: Escapada a Roma)"
          ></h1>
          <p
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Fechas (Ej: 10 al 15 de Agosto)"
            style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '16px', outline: 'none' }}
          ></p>
        </div>

        {isGroup && (
          <div className="collaborators-bar">
            <div className="avatars-group" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div>
                <span className="collab-avatar" style={{ backgroundColor: '#ef4444' }}>D</span>
                <span className="collab-avatar" style={{ backgroundColor: '#3b82f6' }}>N</span>
              </div>
              <span className="collab-status">
                <span className="pulse-dot"></span> Sincronizado
              </span>
            </div>
            <button style={{ background: 'transparent', border: '1px solid var(--border-color)', padding: '8px 12px', borderRadius: '6px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="ph ph-share-network"></i> Compartir
            </button>
          </div>
        )}

        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', marginTop: '30px' }}>
          <div style={{ flex: 1 }}>
            <div id="blocks-container">
              {blocks.map(block => renderBlock(block))}
            </div>

            <div className="block-insertion-menu">
              <span className="insertion-label">Añadir bloque:</span>
              <button className="btn-insert-block" onClick={() => addBlock('text')}>
                <i className="ph ph-text-t"></i> Texto
              </button>
              <button className="btn-insert-block" onClick={() => addBlock('flight')}>
                <i className="ph ph-airplane-tilt"></i> Vuelo
              </button>
              <button className="btn-insert-block" onClick={() => addBlock('hotel')}>
                <i className="ph ph-buildings"></i> Hotel
              </button>
              <button className="btn-insert-block" onClick={() => addBlock('route')}>
                <i className="ph ph-map-pin-line"></i> Lugar/Ruta
              </button>
            </div>
          </div>

          <aside style={{ width: '280px', borderLeft: '1px solid var(--border-color)', paddingLeft: '20px', flexShrink: 0 }}>
            <h3 style={{ fontSize: '16px', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <i className="ph ph-archive"></i> Mi Cajón
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Arrastra tus favoritos guardados directamente al itinerario.
            </p>
            {DRAWER_ITEMS.map(item => (
              <div key={item.id} className="drawer-item" draggable>
                <i
                  className={`ph ${item.type === 'flight' ? 'ph-airplane-tilt' : 'ph-buildings'}`}
                  style={{ color: 'var(--text-secondary)', fontSize: '18px' }}
                ></i>
                {item.label}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </div>
  )
}
