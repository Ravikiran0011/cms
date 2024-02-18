import React from 'react';
// import PolicyHolderForm from './PolicyHolderForm'; // Import the PolicyHolderForm component
import {useStore} from './store'
import {shallow} from 'zustand/shallow'

function App() {
  let tasks = useStore(store => store.tasks);
  tasks = JSON.stringify(tasks)
  console.log(tasks, "Hi")
  const addTask = useStore((store) => store.addTask)
  return <div>
  {tasks}
  <br />
  <button onClick={()=>{addTask("asdsa", "successful")}}>
    Add Task
  </button>
  </div>
}
  export default App;