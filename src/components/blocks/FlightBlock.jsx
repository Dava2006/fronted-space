export default function FlightBlock() {
  return (
    <div className="itinerary-block">
      <div className="block-controls">
        <i className="ph ph-dots-six-vertical drag-handle"></i>
      </div>
      <div className="block-content">
        <div className="mock-block mock-flight">
          <div className="mock-icon">
            <i className="ph ph-airplane-tilt"></i>
          </div>
          <div className="mock-details">
            <h4
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Detalles del Vuelo (Ej: Iberia IB3130)"
            ></h4>
            <p
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Horarios, terminal, localizador..."
            ></p>
          </div>
          <div className="mock-action">Vincular BD</div>
        </div>
      </div>
    </div>
  )
}
