import Image from 'next/image';
import styles from '../../styles/Resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resumeWrapper}>
      <Image alt="Resume" src="/assets/resumes/01262022.png" width={1700} height={2200} />
    </div>
  )
}