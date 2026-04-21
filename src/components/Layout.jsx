import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`container ${isHome ? 'container-index' : ''}`}>

      {children}
      
      {!isHome && (
        <nav className="exercise-navigation" aria-label="Navegación entre ejercicios">          
            <Link to="/" className="back-link" aria-label="Volver al índice principal">
              ← Volver al índice
          </Link>
        </nav>
      )}

        <footer class="main-footer">
          <p>
              Creado por <a href="https://www.jaterli.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="creator-link"> 
                  Jaterli
              </a> con React y ❤️
          </p>
          <p>
              &copy; 2026 - Todos los derechos reservados
          </p>
        </footer>

    </div>
  );
}

export default Layout;