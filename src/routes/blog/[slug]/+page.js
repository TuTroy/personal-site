import { blogPosts } from '$lib/data.js';

export function entries() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { status: 404, error: new Error('Not found') };
  return { post };
}
