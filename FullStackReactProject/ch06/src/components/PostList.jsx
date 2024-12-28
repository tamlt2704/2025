import { Post } from './Post.jsx'
import { Fragment } from 'react'
import PropTypes from 'prop-types'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post.id}>
          <Post key={post._id} {...post} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
