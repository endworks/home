import '../static/sass/app.css'
import Menu from './menu'
import Projects from './projects'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header">
          <a href="/">
            <h1 className="header-title">
              end.<span className="header-light">works</span>
            </h1>
          </a>
          <p className="subtitle">
            by <a href="//github.com/ender-null">@ender-null</a>
          </p>
        </div>
        <Menu></Menu>
      </header>
      <Projects></Projects>
    </div>
  )
}

export default App
