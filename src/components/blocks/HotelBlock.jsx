export default function HotelBlock() {
  return (
    <div className="itinerary-block">
      <div className="block-controls">
        <i className="ph ph-dots-six-vertical drag-handle"></i>
      </div>
      <div className="block-content">
        <div className="mock-block mock-hotel">
          <div className="mock-icon">
            <i className="ph ph-buildings"></i>
          </div>
          <div className="mock-details">
            <h4
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Nombre del Alojamiento"
            ></h4>
            <p
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Dirección, check-in, notas..."
            ></p>
          </div>
          <div className="mock-action">Vincular BD</div>
        </div>
      </div>
    </div>
  )
}
