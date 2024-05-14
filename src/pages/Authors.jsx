import React, { useState } from 'react'

import Avatar1 from '../img/avatar1.jpg'
import Avatar2 from '../img/avatar2.jpg'
import Avatar3 from '../img/avatar3.jpg'
import Avatar4 from '../img/avatar4.jpg'
import Avatar5 from '../img/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData =[
   {id: 1, avatar:Avatar1, name:'Ernest Achiver', posts:3},
   {id: 2, avatar:Avatar2, name:'Jane doe', posts:5},
   {id: 3, avatar:Avatar3, name:'Dharami Mahama', posts:0},
   {id: 4, avatar:Avatar4, name:'Nana Audo', posts:2},
   {id: 5, avatar:Avatar5, name:'Hajia Bintu', posts:1},
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <div>
      <section className="authors">
        { authors.length > 0 ? <div className="comtainer authors__container">
          {
            authors.map(({id, avatar, name, posts}) => {
              return <Link to={`/posts/users/${id}`} className='author'> 
              <div className='author_avatar'>
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className='author__info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
              </Link>
            })
          }
         </div> : <h2 className='center'>No Data Found</h2> }
      </section>
    </div>
  )
}

export default Authors
