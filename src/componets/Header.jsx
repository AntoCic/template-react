import { Link } from 'react-router-dom'
// ASSETS

// STYLE
import '../style/Header.css'
function Header() {

  return (
    <header className='container mx-auto px-4'>
      <nav>
        <Link to={'/'} className='text-blue-600  p-3'>home</Link>
      </nav>
    </header>
  )
}

export default Header
