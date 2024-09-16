import React from 'react'

function CompletedTask({complete}) {
    return (
        <div className='col-8'>
        <h4>Completed Task</h4>
       <ul className='list-unstyled'>
        {  complete.length>0 ?(
            complete.map((c,i)=>(
                <li key={i}>
                    {c}
                </li>
            ))
        ):(
            <li>No CompletedTask</li>
        )
        }
       </ul>
        </div>
    )
}


export default CompletedTask;
