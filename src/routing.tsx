import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const routing = [
  {
    label: 'Home',
    path: '/',
    element: <HomePage></HomePage>,
    menu: true,
  },
  {
    label: 'Projects',
    path: '/projects',
    element: <ProjectsPage></ProjectsPage>,
    menu: true,
  },
  {
    label: 'Project',
    path: '/projects/:id',
    element: <ProjectsPage></ProjectsPage>,
    menu: false,
  },
]

export default routing
