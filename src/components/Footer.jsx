import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/Business">Business</Link></li>
        <li><Link to="/posts/categories/Eduction">Eduction</Link></li>
        <li><Link to="/posts/categories/Enterinment">Enterinment</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Invesment">Invesment</Link></li>
        <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
        <li><Link to="/posts/categories/Wather">Wather</Link></li>
      </ul>

      <div className="footer__copyright">
        <small>All Right Reserved &copy; CopyRight, EGATOR Tutorials.</small>
      </div>
    </footer>
  )
}

export default Footer