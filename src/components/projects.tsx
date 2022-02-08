import projectsData from '../static/data/projects.json'

const Projects = () => {
  return (
    <div className="section">
      <h2 className="section section-title">Projects</h2>
      <div className="projects">
        {projectsData.map((project) => {
          return (
            <div className="project" key={project.slug}>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.link && (
                    <a className="button project-link" href={project.link}>
                      Link
                    </a>
                  )}
                  {project.source && (
                    <a className="button project-source" href={project.source}>
                      Source code
                    </a>
                  )}
                </div>
              </div>
              <img className="project-screenshot" src={project.screenshot} alt={project.title}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
