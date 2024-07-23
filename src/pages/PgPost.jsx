import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ASSETS

// STYLE

function PgPost() {
  const { idPost } = useParams();
  const posts = useSelector((state) => state.post.value);
  return (
    <main className='container mx-auto px-4'>
      <h2>Sono un Post {posts.length > 0 && posts[idPost].title}</h2>
    </main>
  )
}

export default PgPost
