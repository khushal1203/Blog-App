import React, { useState } from 'react'
import { DUMMY_POST } from '../data'
import PostIteam from '../components/PostIteam'

const AuthorPost = () => {
  const [posts] = useState(DUMMY_POST)
  return (
    <section className='author-posts'>
    {posts.length > 0 ?  <div className="container author-posts__container">
     {
      posts.map(({id, thumbnail, category, title, desc, authorID}) =>  <PostIteam  key={id} postID={id} thumbnail={thumbnail} category={category} title={title}  desc={desc} authorID={authorID} />)
    }
     </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default AuthorPost