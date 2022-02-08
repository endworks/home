import { NavLink } from 'react-router-dom'
import routing from '../routing'
import '../static/sass/menu.sass'

const Menu = () => {
  return (
    <nav className="menu">
      {routing
        .filter((item) => item.menu)
        .map((item) => (
          <NavLink to={item.path} key={item.path}>
            {item.label}
          </NavLink>
        ))}
      <NavLink to="//blog.end.works">Blog</NavLink>
    </nav>
  )
}

export default Menu
