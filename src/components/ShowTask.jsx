import { useState } from "react";

function ShowTask({
  taskList,
  deleteTask,
  editTask,
  deleteAllTask,
  toggleCompleted,
}) {
 
 const [filter, setFilter] = useState("All")
  const filterMap = {
    All: () => true,
    Active: (task) => !task.isCompleted,
    Completed: (task) => task.isCompleted,
  };
  const filterName = Object.keys(filterMap);

  const handleFilter=(e)=>{
    setFilter(e.target.value)
  }

  const filteredTasks = taskList.filter(filterMap[filter]);
  
  return (
    <div className="container">
      <section className="showTask">
        <div className="d-flex justify-content-between border-bottom">
          <div className="head">
            <span className="me-2">
              <span className="title">Todo</span>
              <span className="count bg-success text-white">
                {filteredTasks.length}
              </span>
            </span>
            <span className="clearAll btn btn-danger" onClick={deleteAllTask}>
              Clear All
            </span>
          </div>
          <div>
            <select className="form-select" onChange={handleFilter}>
              <option value="default">Filter</option>
              {filterName.map((name) => (
                    <option key={name} value={name} >{name}</option>
                ))}
            </select>
          </div>
        </div>

        <div className="row g-3 pt-3">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
                <div className="col-3" key={task.id}>
                  <div
                    className={`card card-body border border-3 border-top-0 border-end-0 border-bottom-0 border-warning shadow ${
                      task.isCompleted ? "completed" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-between">
                      <p>{task.name}</p>
                      <div>
                        <input
                          type="checkbox"
                          className="form-check-input border-success border-2"
                          checked={task.isCompleted}
                          onChange={() => toggleCompleted(task.id)}
                        />
                        <i
                          className="bi bi-pencil-square px-2"
                          onClick={() => editTask(task.id)}
                        ></i>
                        <i
                          className="bi bi-trash"
                          onClick={() => deleteTask(task.id)}
                        ></i>
                      </div>
                    </div>
                    <p>{task.time}</p>
                  </div>
                </div>
              ))
          ):(
            <p className="text-center">No Task Found</p>
          )
          }
        </div>
      </section>
    </div>
  );
}

export default ShowTask;
