import mongoose from 'mongoose'
import { describe, expect, test, beforeEach } from '@jest/globals'
import {
  createPost,
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  deletePostById,
  getPostById,
} from '../services/posts.js'
import { Post } from '../db/models/post.js'

const samplePosts = [
  {
    title: 'Sample Post 1',
    author: 'Jane Doe',
    content: 'This is the content of sample post 1.',
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Sample Post 2',
    author: 'John Smith',
    content: 'This is the content of sample post 2.',
    tags: ['tag3', 'tag4'],
  },
]
let createdSamplePosts = []

beforeEach(async () => {
  await Post.deleteMany()
  createdSamplePosts = []
  for (const post of samplePosts) {
    const createdPost = await createPost(post)
    createdSamplePosts.push(await createdPost.save())
  }
})

describe('listAllPosts', () => {
  test('should return all posts', async () => {
    const posts = await listAllPosts()
    expect(posts).toHaveLength(samplePosts.length)
    // expect(posts).toEqual(expect.arrayContaining(createdSamplePosts))
  })

  test('should return all posts sorted by createdAt in descending order', async () => {
    const posts = await listAllPosts({
      sortBy: 'createdAt',
      sortOrder: 'descending',
    })
    expect(posts).toHaveLength(samplePosts.length)
    const sortedSamplePosts = createdSamplePosts.sort(
      (a, b) => b.createdAt - a.createdAt,
    )
    expect(posts.map((post) => post.createdAt)).toEqual(
      sortedSamplePosts.map((post) => post.createdAt),
    )
  })

  test('should return all posts sorted by updatedAt in ascending order', async () => {
    const posts = await listAllPosts({
      sortBy: 'updatedAt',
      sortOrder: 'ascending',
    })
    expect(posts).toHaveLength(samplePosts.length)
    const sortedSamplePosts = createdSamplePosts.sort(
      (a, b) => a.updatedAt - b.updatedAt,
    )
    expect(posts.map((post) => post.updatedAt)).toEqual(
      sortedSamplePosts.map((post) => post.updatedAt),
    )
  })

  test('should be able to filter by author', async () => {
    const posts = await listPostsByAuthor('Jane Doe')
    expect(posts).toHaveLength(1)
    expect(posts[0].author).toBe('Jane Doe')
  })

  test('should be able to filter by tag', async () => {
    const posts = await listPostsByTag('tag3')
    expect(posts).toHaveLength(1)
    expect(posts[0].tags).toContain('tag3')
  })
})

describe('createdPost', () => {
  test('with all parameters should return a post', async () => {
    const post = await createPost({
      title: 'Sample Post',
      author: 'John Doe',
      content: 'This is a sample post content.',
      tags: ['mongoose', 'mongodb', 'nodejs'],
    })
    const createdPost = await post.save()
    expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)

    const foundPost = await Post.findById(createdPost._id)
    // expect(foundPost).toEqual(expect.objectContaining(post))
    expect(foundPost.createdAt).toBeInstanceOf(Date)
    expect(foundPost.updatedAt).toBeInstanceOf(Date)
  })

  test('without title should fail', async () => {
    try {
      await createPost({
        author: 'John Doe',
        content: 'This is a sample post content.',
        tags: ['mongoose', 'mongodb', 'nodejs'],
      })
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError)
      expect(error.errors.title).toBeDefined()
    }
  })
})
