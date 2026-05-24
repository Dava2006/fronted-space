import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Component, lazy, Suspense } from 'react'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TripsPage from './pages/TripsPage'
import FavoritesPage from './pages/FavoritesPage'
import SettingsPage from './pages/SettingsPage'
const ItineraryPage = lazy(() => import('./pages/ItineraryPage'))

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace' }}>
          <h2 style={{ color: '#dc2626' }}>Error de la aplicación</h2>
          <pre style={{ marginTop: '16px', background: '#fef2f2', padding: '16px', borderRadius: '8px', whiteSpace: 'pre-wrap', fontSize: '13px' }}>
            {this.state.error.toString()}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

function PrivateRoute() {
  return localStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="itinerarios" element={<TripsPage />} />
            <Route path="favoritos" element={<FavoritesPage />} />
            <Route path="configuracion" element={<SettingsPage />} />
            <Route path="viaje/:id" element={<Suspense fallback={null}><ItineraryPage /></Suspense>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  )
}
