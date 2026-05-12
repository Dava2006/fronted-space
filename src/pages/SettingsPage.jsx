import { useState } from 'react'

export default function SettingsPage() {
  const [nombre, setNombre] = useState('David')
  const [email, setEmail] = useState('david@naval.com')
  const [newPassword, setNewPassword] = useState('')
  const [notifPrecios, setNotifPrecios] = useState(true)
  const [notifCollab, setNotifCollab] = useState(true)

  function handleSaveProfile(e) {
    e.preventDefault()
    alert('Cambios guardados correctamente.')
  }

  function handleSavePassword(e) {
    e.preventDefault()
    setNewPassword('')
    alert('Contraseña actualizada.')
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <header className="section-header">
        <h2>Configuración de Cuenta</h2>
      </header>

      <div className="settings-card">
        <h3>Datos del Perfil</h3>
        <form onSubmit={handleSaveProfile}>
          <div className="input-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-buscar">Guardar Cambios</button>
        </form>
      </div>

      <div className="settings-card">
        <h3>Seguridad</h3>
        <form onSubmit={handleSavePassword}>
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label>Nueva Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-buscar">Actualizar Contraseña</button>
        </form>
      </div>

      <div className="settings-card">
        <h3>Preferencias de Notificaciones</h3>
        <label style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={notifPrecios}
            onChange={e => setNotifPrecios(e.target.checked)}
          />
          Recibir alertas de bajada de precios en mis favoritos
        </label>
        <label style={{ display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={notifCollab}
            onChange={e => setNotifCollab(e.target.checked)}
          />
          Notificar cuando un colaborador edite un itinerario
        </label>
      </div>
    </div>
  )
}
