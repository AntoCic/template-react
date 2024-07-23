import { Outlet } from 'react-router-dom'
import Header from './componets/Header'
import Footer from './componets/Footer'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { set } from './redux/postSlice'


function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.value);

  useEffect(() => {
    if (posts.length <= 0) {
      console.log("First API call");
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((res) => {
          dispatch(set(res));
        })
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  )
}

export default App
