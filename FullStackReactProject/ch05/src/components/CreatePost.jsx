import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createPost } from '../api/posts.js'
import { useQueryClient } from '@tanstack/react-query'

export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost({ title, author, content }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('creating post, handle submit')
    createPostMutation.mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          name='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='author'>author:</label>
        <input
          id='author'
          name='author'
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <textarea
        id='content'
        name='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <input
        type='submit'
        value={createPostMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createPostMutation.isPending}
      />
      {createPostMutation.isSuccess ? (
        <>
          <br />
          <strong>Post created successfully!</strong>
        </>
      ) : null}
    </form>
  )
}
