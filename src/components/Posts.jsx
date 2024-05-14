import React, { useState } from 'react'
import PostIteam from './PostIteam'



import { DUMMY_POST } from '../data'

const Post = () => {
  const[posts] =useState(DUMMY_POST)
  return (
    <section className='posts'>
    {posts.length > 0 ?  <div className="container posts__container">
     {
      posts.map(({id, thumbnail, category, title, desc, authorID}) =>  <PostIteam  key={id} postID={id} thumbnail={thumbnail} category={category} title={title}  desc={desc} authorID={authorID} />)
    }
     </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default Post