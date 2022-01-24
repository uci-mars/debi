import { useRouter } from 'next/router';
import markdownToHtml from '../../lib/markdownToHtml';
import { getProjectBySlug, getAllProjects } from '../../lib/api';
import ErrorPage from 'next/error';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';
import { FaFigma } from 'react-icons/fa';

const iconMap = {
  'figma': <FaFigma />
}

export default function Project({ project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  };

  return(
    <div className={styles.projectBody}>
      <div>
        <Image src={project.coverImage} alt={`Cover image for ${project.title}`} width={1205} height={280} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: project.content}}/>
        <div className={styles.metadata}>
          <h3>{project.title}</h3>
          <div className={styles.colorPalette}>
            {project.colorPalette.map((color) => <div key={color} style={{ backgroundColor: color }} className={styles.colorSwatch} />)}
          </div>
          <h5>Project Type:</h5>
          <p>{project.projectType}</p>
          <p><b>Duration: </b>{project.duration}</p>
          <p><b>Role: </b>{project.role}</p>
          {/* <h4>Duration:</h4><p>{project.duration}</p> */}
          {/* <h4>Role:</h4><p>{project.role}</p> */}
          <h5>Responsibilities:</h5>
          <p>{project.responsibilities}</p>
          <h5>Link{project.links.length > 1 && 's'}:</h5>
          <p>{project.links.map((link) => <a href={link.url} key={link.url} className={styles.link}>{iconMap[link.icon]} {link.name}</a>)}</p>
        </div>
      </div>
    </div>
  )
};

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'slug',
    'coverImage',
    'projectType',
    'duration',
    'role',
    'responsibilities',
    'content',
    'colorPalette',
    'links',
  ])

  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}