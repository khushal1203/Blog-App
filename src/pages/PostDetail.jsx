import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../img/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className='post-detail__thumbnail'>
         <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at libero dolore est ducimus nihil tempore rem suscipit laborum, voluptate exercitationem hic. Numquam repellendus consequatur eius amet ex minima dolores?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo amet minima vel fugit soluta impedit commodi cumque possimus, natus, nam, beatae explicabo? Ex labore vero omnis ducimus cum. Corporis!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae aspernatur consequuntur obcaecati numquam neque ut suscipit. Recusandae officiis cupiditate deserunt. Quia tempore praesentium esse necessitatibus vitae veniam animi nulla iste?</p>

      </div>
     
    </section>
  )
}

export default PostDetail