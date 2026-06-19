import { projects, events } from '$lib/data';

export function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { status: 404, error: new Error('Not found') };
  const projectEvents = events
    .filter((e) => e.projectSlug === params.slug)
    .sort((a, b) => b.date.localeCompare(a.date));
  return { project, projectEvents };
}
