import { useEffect, useState } from 'react'
import CmpUtility from './componets/CmpUtility.jsx'
import { set } from './redux/postSlice.js';
import { useSelector, useDispatch } from 'react-redux';

// ASSETS
import reactLogo from './assets/img/react.svg'
import reduxLogo from './assets/img/redux.svg'
import tailwindLogo from './assets/img/tailwind.svg'
import viteLogo from '/vite.svg'
// STYLE
import './style/App.css'

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.value);
  const count = useSelector((state) => state.counter.value)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'task 1'
    },
    {
      id: 2,
      task: 'task 2'
    },
    {
      id: 3,
      task: 'task 3'
    }
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => {
        dispatch(set(res));
      })
  }, []);


  const addTask = (task) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, task }]);
  };

  // useEffect(() => { console.log(tasks) }, [tasks]);

  return (
    <>
      <div>
        <h1 className='text-5xl'>Template <a className='inline-block' href="https://github.com/AntoCic" target="_blank">
          /AntoCic
        </a> React</h1>
        <a className='inline-block' href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className='inline-block' href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a className='inline-block' href="https://redux.js.org/tutorials/quick-start" target="_blank">
          <img src={reduxLogo} className="logo react" alt="React logo" />
        </a>
        <a className='inline-block' href="https://tailwindcss.com/docs/container" target="_blank">
          <img src={tailwindLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* {posts && posts.map((post) => (<p key={post.id + 'ps'} className='border-2 border-white'>{post.id} - {post.title}</p>))} */}
      {posts.length > 0 && <p key={posts[count - 1].id + 'ps'} className='border-2 border-white'>{posts[count - 1].id} - {posts[count - 1].title}</p>}

      <CmpUtility addTask={addTask}>Clicked : </CmpUtility>
      <div>{tasks.map((task) => (<p key={task.id}>{task.task}</p>))}</div>
      <hr className='my-3' />
    </>
  )
}

export default App
