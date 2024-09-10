type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

type BlogPost = {
  slug: string
  metadata: Metadata
  content: string
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const baseUrl = 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/api/blog-posts`)
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts')
  }
  return response.json()
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetchBlogPosts()
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
