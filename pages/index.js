import Image from 'next/image'
import styles from '../styles/Home.module.css'
import hello from '../assets/hello.svg';
import { getAllProjects } from '../lib/api';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Home({ allProjects }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.businessCard}>
          <div className={styles.profilePicWrapper}>
            <Image alt="Profile picture" src="/assets/profilePic.jpg" height={260} width={260} />
          </div>
          <div>
            <div className={styles.title}>
              <Image src={hello} alt={"Hello"}/>
            </div>
            <h2 className={styles.subtitle}>
              my name is <b>Debi Vu</b>
            </h2>
            <h3 className={styles.description}>
              I am an aspiring UX designer recently graduated from the University of California, Irvine.
            </h3>
            <div className={styles.contactLinks}>
              <a href="https://www.linkedin.com/in/debi-vu-22582522b/">
                <FaLinkedinIn />
              </a>
              <a href="mailto:debbiekv@uci.edu">
                <HiOutlineMail />
              </a>
              <a href="mailto:debbiekv@uci.edu">
                <span>debbiekv@uci.edu</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.projects_subheader} id="projects">
          <h1>Projects</h1>
        </div>

        <div className={styles.projects}>
          { allProjects.map(({title, slug, thumbnail, description}, index) => 
          <Link key={slug} href={`/project/${slug}`} passHref>
            <div className={styles.card}>      
              <div className={styles.projectThumbnail}>
                <Image src={thumbnail} alt={`Thumbnail for ${title}`} width={480} height={300}/>
              </div>
        
              <h2>{title}</h2>
              <p>{description}</p>
              <small>View case study &rarr;</small>
            </div>
          </Link>
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