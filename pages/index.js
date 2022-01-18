import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hello from '../assets/hello.svg';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <Image src={hello} alt={"Hello"}/>
        </div>
        <h2 className={styles.subtitle}>
          my name is <b>Debi Kim</b>
        </h2>
        <h3 className={styles.description}>
          I am an aspiring UX designer recently graduated from the University of California, Irvine.
        </h3>

        <div className={styles.projectsHeader}>
          <h1>Projects</h1>
        </div>

        <div className={styles.projects}>
          { projects.map(({name, description, key, thumbnail}, index) => 
          <div key={key} className={styles.card}>
            <a href="https://nextjs.org/docs">
              <div className={styles.projectThumbnail}>
                <Image src={thumbnail} alt={`Thumbnail for ${name}`} width={480} height={300}/>
              </div>
            </a>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={`/project/${key}`}>
              <small>View case study &rarr;</small>
            </a>
          </div>
            ) 
          }
        </div>
      </main>
    </div>
  )
}
