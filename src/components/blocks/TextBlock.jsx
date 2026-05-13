export default function TextBlock({ dayNumber }) {
  return (
    <div className="itinerary-block">
      <div className="block-controls">
        <i className="ph ph-dots-six-vertical drag-handle"></i>
      </div>
      <div className="block-content">
        <h2
          contentEditable
          suppressContentEditableWarning
          data-placeholder={`Día ${dayNumber}: [Escribe el destino]`}
        >
          {`Día ${dayNumber}: `}
        </h2>
        <p
          contentEditable
          suppressContentEditableWarning
          data-placeholder="Escribe tus notas aquí..."
        ></p>
      </div>
    </div>
  )
}
