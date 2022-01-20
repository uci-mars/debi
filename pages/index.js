import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hello from '../assets/hello.svg';
import { getAllProjects } from '../lib/api';

export default function Home({ allProjects }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <Image src={hello} alt={"Hello"}/>
        </div>
        <h2 className={styles.subtitle}>
          my name is <b>Debi Vu</b>
        </h2>
        <h3 className={styles.description}>
          I am an aspiring UX designer recently graduated from the University of California, Irvine.
        </h3>

        <div className={styles.projects_subheader}>
          <h1>Projects</h1>
        </div>

        <div className={styles.projects}>
          { allProjects.map(({title, slug, thumbnail, description}, index) => 
          <div key={slug} className={styles.card}>
            <a href={`/project/${slug}`}>
              <div className={styles.projectThumbnail}>
                <Image src={thumbnail} alt={`Thumbnail for ${title}`} width={480} height={300}/>
              </div>
            </a>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={`/project/${slug}`}>
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

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'slug',
    'thumbnail',
    'description',    
  ]);

  return {
    props: { allProjects },
  }
};