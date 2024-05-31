function AddTask({task, handleChange, addTask}) {
  return (
    <section className='addTask'>
    <form onSubmit={addTask}>
      <input type="text" name="task" value={task.name} placeholder="add task" onChange={handleChange}/>
      <button type="submit" className="btn btn-warning text-white">Add</button>
    </form>
  </section>
  );
}

export default AddTask;
