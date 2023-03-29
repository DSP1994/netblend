import React from 'react'

function Article(props) {
    const [
        id, owner, is_owner, title, content, created_on,
        modified_on, profile_id, profile_image,
    ] = props
  return (
    <div>Article</div>
  )
}

export default Article