export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050';

export const categoryIconMap = {
  'CNC Laser Cutting': 'laser',
  'Metal Fabrication': 'welder',
  'Material Guides': 'layers',
  'Engineering Guides': 'ruler',
  'CNC Machining': 'drill',
  'Manufacturing Tips': 'gear',
  'Industrial Components': 'nutBolt',
};

export const resolveImageUrl = (url) => {
  if (!url?.trim()) return '';

  const trimmed = url.trim();

  if (trimmed.startsWith('/uploads/')) {
    return `${API_BASE}${trimmed}`;
  }

  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    const uploadsMatch = trimmed.match(/\/uploads\/[^"'\s?#]+/);
    if (uploadsMatch) return `${API_BASE}${uploadsMatch[0]}`;
    return trimmed;
  }

  if (trimmed.startsWith('/')) {
    return trimmed;
  }

  return `${API_BASE}/${trimmed.replace(/^\//, '')}`;
};

export const extractFirstImageFromContent = (html) => {
  if (!html) return '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? resolveImageUrl(match[1]) : '';
};

export const resolveContentHtml = (html) => {
  if (!html) return '';

  return html
    .replace(/src=["']([^"']+)["']/gi, (_, src) => `src="${resolveImageUrl(src)}"`)
    .replace(/href=["']([^"']+)["']/gi, (_, href) => {
      if (href.includes('/uploads/') || href.startsWith('http')) {
        const resolved = resolveImageUrl(href);
        if (resolved) return `href="${resolved}"`;
      }
      return `href="${href}"`;
    });
};

const getCardImage = (blog) => {
  const featured = resolveImageUrl(blog.featuredImage || blog.image);
  if (featured) return featured;
  return extractFirstImageFromContent(blog.content);
};

const formatBlog = (blog, { includeContent = true } = {}) => {
  const cardImage = getCardImage(blog);
  const featuredImage = resolveImageUrl(blog.featuredImage || '');

  return {
    ...blog,
    image: cardImage,
    featuredImage: blog.featuredImage || '',
    featuredImageUrl: featuredImage,
    content: includeContent ? resolveContentHtml(blog.content) : blog.content,
    categoryIcon: categoryIconMap[blog.category] || 'gear',
  };
};

export const fetchBlogs = async (params = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value);
    }
  });

  const query = searchParams.toString();
  const response = await fetch(`${API_BASE}/api/blogs${query ? `?${query}` : ''}`);

  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const result = await response.json();
  return (result.data || []).map((blog) => formatBlog(blog, { includeContent: false }));
};

export const fetchBlogBySlug = async (slug) => {
  const response = await fetch(`${API_BASE}/api/blogs/${slug}`);

  if (!response.ok) {
    throw new Error('Blog not found');
  }

  const result = await response.json();
  return formatBlog(result.data);
};

export const submitContactRequest = async (payload) => {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to submit inquiry');
  }

  return result;
};
