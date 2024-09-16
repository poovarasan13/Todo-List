import React, { useState } from 'react'
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import CompletedTask from './CompletedTask';
import DeletedTask from './DeletedTask';

function  TodoList() {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showViewTask, setShowViewTask] = useState(false);
    const[showComplete,setShowComplete]=useState(false);
    const[complete,setComplte]=useState([]);
    const[showDelete,setShowDelete]=useState(false);
    const[deletetask,setDelete]=useState([]);


    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
        setShowViewTask(false);
        setShowComplete(false);
        setShowDelete(false);
      };
      const toggleViewTask = () => {
        setShowViewTask(!showViewTask);
        setShowAddTask(false);
        setShowComplete(false);
        setShowDelete(false);

      };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };
  const toggleComplete=()=>{
    setShowComplete(!showComplete);
    setShowDelete(false);
    setShowViewTask(false);
    setShowAddTask(false);
}
const toggleDelete=()=>{
    setShowDelete(!showDelete);
    setShowComplete(false);
    setShowViewTask(false);
    setShowAddTask(false);
}
    
    return (
        <>
        <div className='container alert alert-light '> 
            <div className='row mb-4 '>
            <div className='text-center fs-1'>TodoList</div></div>

            <div className='row justify-content-center mt-3 pt-4'>
             <div className='col-2'>
                <button className='btn-sm btn btn-warning' onClick={toggleAddTask}>
                    {showAddTask ? 'Hide Add Task' : ' Add Task'}
                 </button>
              </div>
  

               <div className='col-2'>
                <button className='btn-sm btn btn-warning' onClick={toggleViewTask}>
                   {showViewTask ? 'Hide View Task': ' View Task'}
                    </button></div>
                    <div className='col-2'><button className='btn-sm btn btn-warning' onClick={toggleComplete}>
                   {showComplete ? 'Hide Completed Task': ' Completed Tasks'}
                    </button>
                    </div>
                    <div className='col-2'><button className='btn-sm btn btn-warning' onClick={toggleDelete}>
                   {showDelete ? 'Hide Deleted Task': 'Deleted Tasks'}
                    </button></div>
                
                      

            </div>

            <div className='row justify-content-center pt-4'>
            {showAddTask && <AddTask addNewTask={addNewTask} />}
            {showViewTask  && <ViewTask tasks={tasks} setTasks={setTasks} setComplte={setComplte} setDelete={setDelete} complete={complete} deletetask={deletetask}/>}
            {showComplete &&<CompletedTask complete={complete} />}
            {showDelete &&<DeletedTask deletetask={deletetask} />}
            </div>
        </div>
        
        
        
        
        
        </>
    )
}

export default  TodoList;
