import Image from "next/image";
import styles from "../home.module.sass";

export default function Projects() {
  const projects: {
    slug: string;
    title: string;
    description: string;
    screenshot: string;
    link: string;
    source: string | null;
  }[] = [
    {
      slug: "zine",
      title: "Zine",
      description: "See available movies in cinemas in a less annoying way",
      screenshot: "https://dummyimage.com/320x240/aaa/fff",
      link: "//zine.end.works",
      source: "//github.com/ender-null/zine",
    },
    {
      slug: "polaris",
      title: "Polaris",
      description: "A multi platform Typescript bot using plugins!",
      screenshot: "https://dummyimage.com/320x240/aaa/fff",
      link: "//t.me/PolarisBot",
      source: "//github.com/ender-null/polaris",
    },
    {
      slug: "canopus",
      title: "Canopus",
      description: "I write microservices no one wants",
      screenshot: "https://dummyimage.com/320x240/aaa/fff",
      link: "//on.my.end.works",
      source: "//github.com/endworks/canopus",
    },
    {
      slug: "accurate-jett-gameplay",
      title: "Accurate Jett Gameplay [ALPHA]",
      description: "100% not fake real jett gameplay",
      screenshot: "https://dummyimage.com/320x240/aaa/fff",
      link: "//jett.end.works",
      source: null,
    },
  ];

  return (
    <div className={styles.section}>
      <h2
        className={`${styles.section} ${styles["section-title"]} ${styles.contrast}`}
      >
        Projects
      </h2>
      <div className={`${styles["section-content"]} ${styles.projects}`}>
        {projects.map((project) => {
          return (
            <div className={styles.project} key={project.slug}>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>
                  <span className={styles.contrast}>{project.title}</span>
                </h3>
                <p className={styles["project-description"]}>
                  {project.description}
                </p>
                <div className={styles["project-links"]}>
                  {project.link && (
                    <a
                      className={`${styles.button} ${styles["project-link"]}`}
                      href={project.link}
                    >
                      Link
                    </a>
                  )}
                  {project.source && (
                    <a
                      className={`${styles.button} ${styles["project-source"]}`}
                      href={project.source}
                    >
                      Source code
                    </a>
                  )}
                </div>
              </div>
              {project.screenshot && (
                <Image
                  className={styles["project-screenshot"]}
                  src={project.screenshot}
                  alt={project.title}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
