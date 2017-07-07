import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/beijing">北京</Link></li>
      <li><Link to="/shanghai">上海</Link></li>
    </ul>
  </nav>
)
