import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = join(process.cwd(), '_data/projects');

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const contentPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    };

    if (field === 'content') {
      items[field] = content;
    };

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items;
}

export function getAllProjects(fields = []) {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug, fields));

  return projects;
}