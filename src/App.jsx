import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddTodo from './Components/AddTodo';
import EditeTodo from './Components/EditeTodo';
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route exact path='/*' element={<AddTodo/>}/>
      <Route exact path='/edit-todo' element={<EditeTodo/>}/>
     </Routes>
  </BrowserRouter>
  )
}

export default App
