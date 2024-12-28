import { Post } from '../db/models/post.js'

export async function createPost(userId, { title, content, tags }) {
  const post = new Post({
    title,
    content,
    author: userId,
    tags,
  })
  return await post.save()
}

async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}

export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostById(postId) {
  return await Post.findById(postId)
}

export async function updatePostById(userId, postId, { title, content, tags }) {
  return await Post.findByIdAndUpdate(
    { _id: postId, author: userId },
    { $set: { title, content, tags } },
    { new: true },
  )
}

export async function deletePostById(userId, postId) {
  return await Post.deleteOne({ _id: postId, author: userId })
}
