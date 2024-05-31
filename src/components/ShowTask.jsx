function ShowTask({taskList, deleteTask, editTask, deleteAllTask}) {
    return ( 
        <div className="container">
        <section className='showTask'>
            <p className="head">
                <span className="me-2">
                    <span className="title">Todo</span>
                    <span className="count bg-success text-white">{taskList.length}</span>
                </span>
                <span className="clearAll btn btn-danger" onClick={deleteAllTask}>Clear All</span>
            </p>
            <div className="row g-3">
                {taskList.map(task=>(
                    <div className="col-3" key={task.id}>
                        <div className="card card-body border border-3 border-top-0 border-end-0 border-bottom-0 border-warning shadow">
                        <div className="d-flex justify-content-between">
                            <p>{task.name}</p>
                            <div>
                                <i className="bi bi-pencil-square" onClick={()=>editTask(task.id)}></i>
                                <i className="bi bi-trash" onClick={()=>deleteTask(task.id)}></i>
                            </div>
                        </div>
                         <p>{task.time}</p>                
                         </div>
                    </div>
                ))}
            </div>
            {/* <ul>
            <li>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>                
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                    </li>
            </ul> */}
        </section>
        </div>
     );
}

export default ShowTask;