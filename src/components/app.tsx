import { Link, Route, Routes } from 'react-router-dom'
import routing from '../routing'
import '../static/sass/app.sass'
import Menu from './menu'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header">
          <Link to="/">
            <h1 className="header-title">
              end.<span className="header-light">works</span>
            </h1>
          </Link>
          <p className="subtitle">
            by{' '}
            <Link to="//github.com/ender-null" className="contrast">
              @ender-null
            </Link>
          </p>
        </div>
        <Menu></Menu>
      </header>
      <Routes>
        {routing.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
