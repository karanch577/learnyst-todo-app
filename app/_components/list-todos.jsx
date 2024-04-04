"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoActiveTabs from './todo-active-tabs';
import TodoItem from './todo-item';

function ListTodos() {
  const [activeTab, setActiveTab] = useState("All") 
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [filteredTodos, setFilteredTodos] = useState([])
  
  const todos = useSelector(state => state.todos.todos)

  const memoizedHandleTab = useCallback((activeTab) => {
    setActiveTab(activeTab)
  }, [])

  // display on one accordion at a time
  const handleAccordion = (id) => {
    activeAccordion === id ? setActiveAccordion(null) : setActiveAccordion(id)
  }

  // filtering the todos based on all , done and to do
  useEffect(()  => {
    if(activeTab === "All") {
      setFilteredTodos(todos)
    }

    if(activeTab === "Done") {
      const updatedTodos = todos.filter(todo => todo.isCompleted)
      setFilteredTodos(updatedTodos)
    }

    if(activeTab === "To Do") {
      const updatedTodos = todos.filter(todo => !todo.isCompleted)
      setFilteredTodos(updatedTodos)
    }
  }, [activeTab, todos])

  return (
    <div className='w-full md:w-[60%] min-h-screen pt-12 px-6 pb-6 sm:px-12'>
       <h3 className="text-[28px] text-blue-dark font-medium mt-10">Todo Task</h3>
      <TodoActiveTabs activeTab={activeTab} handleTabClick={memoizedHandleTab} />
      <div className='todo-container md:max-h-[68vh] overflow-y-auto text-[#313131] space-y-2'>
        {filteredTodos.length > 0 ? filteredTodos.map((todo) => (
          <TodoItem key={todo.id} 
          todo={todo} 
          isOpen={todo.id === activeAccordion} 
          handleAccordion={handleAccordion}
          />
        )) : (
          <p>No todo available</p>
        )}
      </div>
    </div>
  )
}

export default ListTodos