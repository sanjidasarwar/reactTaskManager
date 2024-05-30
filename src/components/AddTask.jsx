function AddTask({task, handleChange}) {
  return (
    <section className='addTask'>
    <form>
      <input type="text" name="task" value={task} placeholder="add task" onChange={handleChange}/>
      <button type="submit" className="btn btn-warning text-white">Add</button>
    </form>
  </section>
  );
}

export default AddTask;
