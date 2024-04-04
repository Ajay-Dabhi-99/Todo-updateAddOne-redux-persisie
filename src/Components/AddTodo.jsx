import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTodos, deleteTodo, editTodo } from "../Redux/Slice/TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const ListData = useSelector((state) => state.Todo);
  const [addTodo, setAddTodo] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [updated, setUpdated] = useState(false);

  // onchange Handler
  const handelInputChange = (key, value) => {
    setAddTodo((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // onSubmit Handler
  const handleTodoAdd = (e) => {
    e.preventDefault();
    if (addTodo.title && addTodo.description !== "") {
      if (updated) {
        dispatch(editTodo(addTodo));
        setAddTodo({
          title: "",
          description: "",
        });
      } else {
        const newId = new Date().toISOString();
        dispatch(addTodos({ ...addTodo, id: newId }));
        setAddTodo({
          title: "",
          description: "",
        });
      }
    } else {
      toast.warn("Fill Title and Description");
    }
  };

  const handleEditTodo = (data) => {
    setUpdated(true);
    const updatedTodo = {
      id: data.id,
      title: data.title,
      description: data.description,
    };
    setAddTodo(updatedTodo);
    // dispatch(editTodo(updatedTodo));
  };
  // Delete Todo
  const handleDeleteTodo = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="max-w-[500px] w-full mx-auto p-5">
        <h3 className="text-center font-bold text-2xl mb-5">Add Todo</h3>
        <form
          onSubmit={handleTodoAdd}
          className="bg-white rounded-lg p-5 space-y-5"
        >
          <input
            type="text"
            value={addTodo.title}
            onChange={(e) => handelInputChange("title", e.target.value)}
            className="inputStyle"
            placeholder="Enter Title"
          />
          <input
            type="text"
            value={addTodo.description}
            onChange={(e) => handelInputChange("description", e.target.value)}
            className="inputStyle"
            placeholder="Enter Description"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-400 px-2 py-2 font-bold text-white"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div className="flex flex-wrap justify-start p-5">
        {ListData &&
          ListData.map((data) => (
            <div key={data.id} className="w-1/4  p-2">
              <div className="w-full bg-white rounded-md p-3">
                <span className="block text-lg">{data.title}</span>
                <span className="block text-lg">{data.description}</span>
                <div className="flex items-center justify-between space-x-3 pt-2">
                  <button
                    type="button"
                    className="w-1/2 bg-blue-500 text-sm rounded-md p-2"
                    onClick={() => handleEditTodo(data)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="w-1/2 bg-red-500 text-sm rounded-md p-2"
                    onClick={() => handleDeleteTodo(data.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddTodo;
