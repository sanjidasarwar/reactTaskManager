function AddTask() {
  return (
    <section className='addTask'>
    <form>
      <input type="text" name="task" value='' placeholder="add task" maxLength="25" />
      <button type="submit" className="btn btn-warning text-white">Add</button>
    </form>
  </section>
  );
}

export default AddTask;
