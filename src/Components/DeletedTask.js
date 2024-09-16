import React from 'react'

function DeletedTask({deletetask}) {
    return (
        <>
        <h4>Deleted Task</h4>
      <ul className='list-unstyled'>
              {
                deletetask.length>0?
                (
                deletetask.map((task,i)=>(
                    <li key={i}>
                        {task}
                    </li>
                ))
                ):
                (
                    <li>No Deleted Task</li>
                )
              }

      </ul>
        </>
    )
}

export default DeletedTask
