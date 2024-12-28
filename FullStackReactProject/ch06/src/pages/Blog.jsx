import { useQuery } from '@tanstack/react-query'
import { CreatePost } from '../components/CreatePost.jsx'
import { PostFiler } from '../components/PostFilter.jsx'
import { PostList } from '../components/PostList.jsx'
import { PostSorting } from '../components/PostSorting.jsx'
import { getPosts } from '../api/posts.js'
import { useState } from 'react'
import { Header } from '../components/Header.jsx'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })
  const posts = postsQuery.data ?? []
  return (
    <div style={{ padding: 8 }}>
      <Header />
      <br />
      <br />
      <CreatePost />
      <br />
      Filter by:
      <PostFiler
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <PostList posts={posts} />
    </div>
  )
}
