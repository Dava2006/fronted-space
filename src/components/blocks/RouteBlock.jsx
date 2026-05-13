export default function RouteBlock() {
  return (
    <div className="itinerary-block">
      <div className="block-controls">
        <i className="ph ph-dots-six-vertical drag-handle"></i>
      </div>
      <div className="block-content">
        <div className="mock-block mock-route">
          <div className="mock-icon">
            <i className="ph ph-map-pin-line"></i>
          </div>
          <div className="mock-details">
            <h4
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Lugar a visitar o ruta"
            ></h4>
            <p
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Añade una descripción o precio de entrada..."
            ></p>
          </div>
          <div className="mock-action">Añadir mapa</div>
        </div>
      </div>
    </div>
  )
}
