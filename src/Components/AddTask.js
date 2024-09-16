import React, { useState } from 'react'

function AddTask({addNewTask}) {
    const [task,setTask]=useState('');
    const handleSubmit=(e)=>{
       e.preventDefault();
        addNewTask(task);
        setTask('');
    }
    return (
        <>
      <div className='col-3'>
      <form>
        
        <div className='form-control my-2'>
            <label>Task  :</label>
            <input type='text' placeholder='Enter The Task' value={task} onChange={e=>setTask(e.target.value)}></input>
        </div>
        <button className="btn btn-success mt-2" onClick={handleSubmit}>
        Submit Task
      </button>
       
      </form>
      </div>
        </>
    )
}

export default AddTask
