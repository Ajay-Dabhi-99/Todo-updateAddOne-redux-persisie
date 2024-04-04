import React from 'react'

const EditeTodo = () => {
  return (
    <div className="w-full h-screen bg-slate-300 flex items-center justify-center">
      <div className="max-w-[500px] w-full p-5">
        <h3 className="text-center font-bold text-2xl mb-5">Edit Todo</h3>
        <form className="bg-white rounded-lg p-5 space-y-5">
          <input type="text" name="" id="" className="inputStyle" placeholder="Enter Title"/>
          <input type="text" name="" id="" className="inputStyle" placeholder="Enter Description"/>
          <button type="submit" className="w-full rounded-md bg-blue-400 px-2 py-2 font-bold text-white">Edit Todo</button>
        </form>
      </div>
    </div>
  )
}

export default EditeTodo