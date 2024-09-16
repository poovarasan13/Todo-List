import React, { useState } from 'react'

function AddTask({addNewTask}) {
    const [task,setTask]=useState('');
    const [msg,setMessage]=useState('');
    const handleSubmit=(e)=>{
       e.preventDefault();
        addNewTask(task);
        setTask('');
        setMessage('Task Added');
       setInterval(()=>{
          setMessage('')
        },7000)
    }
    return (
        <>
      <div className='col-md-5 col-12'>
      <form>
        
        <div className='form-control my-2 pt-4 '>
            <label>Task  :</label>
            <input type='text' placeholder='Enter The Task' value={task} onChange={e=>setTask(e.target.value)}></input>
       
     <button className="btn ms-3 btn-sm btn-success my-3" onClick={handleSubmit}>
        Add Task
      </button>
      <div className='col-12'>{msg}</div>
      </div>
      </form>
      </div>
        </>
    )
}

export default AddTask
