import React from 'react'
// import CompletedTask from './CompletedTask';
// import DeletedTask from './DeletedTask';

function ViewTask({tasks,setTasks,setComplte,setDelete,complete,deletetask}) {
    // const[showComplete,setShowComplete]=useState(false);
   // const[complete,setComplte]=useState([]);
    // const[showDelete,setShowDelete]=useState(false);
   // const[deletetask,setDelete]=useState([]);
    const addCompleteTask=(index)=>{

        const  task=tasks[index];
        setComplte([...complete,task]);
        setTasks(tasks.filter((_, i) => i!== index));
    }
    const deleteTask=(index)=>{
        const  task=tasks[index];
        setDelete([...deletetask,task]);
        setTasks(tasks.filter((_, i) => i!== index));
    }
    // const toggleComplete=()=>{
    //     setShowComplete(!showComplete);
    //     setShowDelete(false);
    // }
    // const toggleDelete=()=>{
    //     setShowDelete(!showDelete);
    //     setShowComplete(false);
    // }

    return (
        <div>
          
        <div className='row justify-content-center'>
            <div className='col-5'>
            <ul className='list-unstyled text-deanger'>
            {tasks.length > 0 ? (
            tasks.map((t, i) => (
              <li key={i} className="d-flex justify-content-between  my-2">
                {t}
                <div>
                  <button
                    onClick={() => addCompleteTask(i)}
                    className='btn btn-success btn-sm me-2'
                  >
                  &#10004;
                  </button>
                  <button
                    onClick={() => deleteTask(i)}
                    className='btn-sm btn btn-danger'
                  >
                    &#10008;
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No Tasks</li>
          )}
            </ul>
        </div>
        </div>
        {/* <div className='row justify-content-center'>
            <div className='col-4'><button className='btn-sm btn btn-danger' onClick={toggleComplete}>
                   {showComplete ? 'Hide Completed Task': ' Completed Tasks'}
                    </button>
                    </div>
                    <div className='col-4'><button className='btn-sm btn btn-danger' onClick={toggleDelete}>
                   {showDelete ? 'Hide Deleted Task': 'Deleted Tasks'}
                    </button></div>
     
        </div>
        <div className='row justify-content-center pt-4'>
            {showComplete &&<CompletedTask complete={complete}/>}
            {showDelete &&<DeletedTask deletetask={deletetask}/>}
        </div> */}
        </div>
       
    )
}

export default ViewTask;
