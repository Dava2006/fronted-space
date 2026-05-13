import { useState } from 'react'

const INITIAL_FAVORITES = [
  { id: 'f1', name: 'Museo del Louvre', desc: 'Arte e Historia' },
  { id: 'f2', name: 'Hotel Le París', desc: 'Alojamiento céntrico' },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES)

  function removeFavorite(id) {
    setFavorites(prev => prev.filter(f => f.id !== id))
  }

  return (
    <div>
      <header className="section-header">
        <h2>Mis Favoritos</h2>
        <p>Vuelos, hoteles y lugares que has guardado para futuras aventuras.</p>
      </header>

      <div className="places-grid">
        {favorites.map(fav => (
          <div key={fav.id} className="place-card">
            <div className="place-image placeholder-img-tall">
              <button
                className="btn-favorite favorited"
                title="Quitar de favoritos"
                onClick={() => removeFavorite(fav.id)}
              >
                <i className="ph ph-heart ph-fill" style={{ color: '#ef4444' }}></i>
              </button>
            </div>
            <div className="place-info">
              <h3>{fav.name}</h3>
              <p>{fav.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
