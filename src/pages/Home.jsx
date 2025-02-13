import { useState } from 'react'
import CmpUtility from '../componets/CmpUtility'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { btn } from '../GeneralCmpTailwind';

// ASSETS
import reactLogo from '/react.svg'
import reduxLogo from '../assets/img/redux.svg'
import tailwindLogo from '../assets/img/tailwind.svg'
import viteLogo from '../assets/img/vite.svg'
// STYLE
import '../style/Home.css'

function Home() {
  // post
  const posts = useSelector((state) => state.post.value);
  // counter
  const count = useSelector((state) => state.counter.value)

  // Task list
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'task 1'
    },
    {
      id: 2,
      task: 'task 2'
    }
  ])
  const addTask = (task) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, task }]);
  };

  return (
    <main className='container mx-auto px-4 my-4 text-center'>
      <h1 className='text-5xl'>Template <a className='inline-block text-blue-600' href="https://github.com/AntoCic" target="_blank">
        /AntoCic
      </a> React</h1>
      <a className='inline-block' href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="home-loghi" alt="Vite logo" />
      </a>
      <a className='inline-block' href="https://react.dev" target="_blank">
        <img src={reactLogo} className="home-loghi react" alt="React logo" />
      </a>
      <a className='inline-block' href="https://redux.js.org/tutorials/quick-start" target="_blank">
        <img src={reduxLogo} className="home-loghi redux" alt="React logo" />
      </a>
      <a className='inline-block' href="https://tailwindcss.com/docs/container" target="_blank">
        <img src={tailwindLogo} className="home-loghi tailwind" alt="React logo" />
      </a>

      {/* {posts && posts.map((post) => (<p key={post.id + 'ps'} className='border-2 border-white'>{post.id} - {post.title}</p>))} */}
      {posts.length > 0 && <p key={posts[count - 1].id + 'ps'} ><button className={btn.outWhite}> <Link to={`post/${posts[count - 1].id}`} >OPEN POST: {posts[count - 1].title}</Link></button></p>}
      <CmpUtility addTask={addTask}>Click to change post : </CmpUtility>
      <div>{tasks.map((task) => (<p key={task.id}>{task.task}</p>))}</div>
    </main>
  )
}

export default Home
