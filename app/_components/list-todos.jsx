"use client";

import React from 'react'
import { useSelector } from 'react-redux'

function ListTodos() {
  const todos = useSelector(state => state.todos.todos)
  console.log(todos)
  return (
    <div className='border border-green-500 w-[60%] min-h-screen'>ListTodos</div>
  )
}

export default ListTodos