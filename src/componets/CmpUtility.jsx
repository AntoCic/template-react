import { useState } from 'react'
import { increment, decrement } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
export default function CmpUtility({ children, addTask }) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  const [inputText, setinputText] = useState('')
  const handleAddTask = () => {
    const textToAdd = inputText
    setinputText('');
    return addTask(textToAdd)
  }

  return (
    <div className='my-4'>
      <button className='mb-8 border-2 px-2 hover:bg-blue-400 rounded-full' onClick={() => dispatch(increment())}>
        {children} {count}
      </button>
      <button className='mb-8 border-2 px-2 hover:bg-blue-400 rounded-full ms-2' onClick={() => dispatch(decrement())}>Post Precedente
      </button>

      <hr className='my-3' />
      <p>ADD TASK: <input value={inputText} className='px-2' onChange={(e) => setinputText(e.target.value)} type="text" placeholder='...' /> <button className='p-0 px-1' onClick={handleAddTask} > + </button></p>
    </div>

  )
}
