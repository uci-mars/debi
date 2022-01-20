import { useRouter } from 'next/router';
import markdownToHtml from '../../lib/markdownToHtml';
import { getProjectBySlug, getAllProjects } from '../../lib/api';
import ErrorPage from 'next/error';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

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
          <h3>Project Type:</h3>
          <p>{project.projectType}</p>
          <h3>Duration:</h3>
          <p>{project.duration}</p>
          <h3>Role:</h3>
          <p>{project.role}</p>
          <h3>Responsibilities:</h3>
          <p>{project.responsibilities}</p>
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