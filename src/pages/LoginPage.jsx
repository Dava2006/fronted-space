import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.add('login-body')
    return () => document.body.classList.remove('login-body')
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    navigate('/')
  }

  function handleRegister(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="login-container">
      <div className="login-image-section">
        <div className="login-quote">
          <h2>"El mundo es un libro, y quienes no viajan leen solo una página."</h2>
          <p>– San Agustín</p>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-form-wrapper">
          <div className="login-logo">
            <div className="logo-icon">N</div>
            <span className="logo-text">Naval</span>
          </div>

          {!isRegister ? (
            <>
              <h1>Te damos la bienvenida</h1>
              <p className="login-subtitle">Inicia sesión para planificar tu próxima aventura.</p>

              <button className="btn-google">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google Logo"
                  className="google-icon"
                />
                Continuar con Google
              </button>

              <div className="login-divider">
                <span>o iniciar sesión con email</span>
              </div>

              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="ejemplo@correo.com" required />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" placeholder="••••••••" required />
                </div>
                <div className="login-options">
                  <label className="remember-me">
                    <input type="checkbox" /> Recuérdame
                  </label>
                  <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" className="btn-submit">Iniciar Sesión</button>
              </form>

              <p className="login-footer">
                ¿No tienes cuenta?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(true) }}>
                  Regístrate gratis
                </a>
              </p>
            </>
          ) : (
            <>
              <h1>Crear cuenta</h1>
              <p className="login-subtitle">Únete a Naval y empieza a planificar tus viajes.</p>

              <form onSubmit={handleRegister}>
                <div className="input-group">
                  <label>Nombre de usuario</label>
                  <input type="text" placeholder="mi_usuario" required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div className="input-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Juan" required />
                  </div>
                  <div className="input-group">
                    <label>Apellido</label>
                    <input type="text" placeholder="García" required />
                  </div>
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="ejemplo@correo.com" required />
                </div>
                <div className="input-group">
                  <label>Contraseña</label>
                  <input type="password" placeholder="••••••••" required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div className="input-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="+34 600 000 000" />
                  </div>
                  <div className="input-group">
                    <label>Fecha de nacimiento</label>
                    <input type="date" />
                  </div>
                </div>
                <button type="submit" className="btn-submit" style={{ marginTop: '10px' }}>
                  Crear cuenta
                </button>
              </form>

              <p className="login-footer">
                ¿Ya tienes cuenta?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(false) }}>
                  Inicia sesión
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
