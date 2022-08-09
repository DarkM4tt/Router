import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>The Products Page!</h1>
      <ul>
        <li>
          <Link to="p1">A Books</Link>
        </li>
        <li>
          <Link to="p2">A Carpet</Link>
        </li>
        <li>
          <Link to="p3">Online Course</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products
