"use client";

import { deleteTodo, toggleIsComplete, updateTodo } from "@/lib/features/todos/todosSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addTodoFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
});

function TodoItem({ todo, isOpen, handleAccordion }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(addTodoFormSchema),
    values: {
      title: todo.title,
      description: todo.description
    }
  });


  const [isEdit,setIsEdit] = useState(false)

  const dispatch = useDispatch();

  const handleIsComplete = (e) => {
    // preventing event bubbling
    e.stopPropagation();
    dispatch(toggleIsComplete(todo?.id));
  };

  const onSubmit = (data) => {
    dispatch(updateTodo({...data, id: todo.id, isCompleted: todo.isCompleted}))

    reset()

    // setting isEdit to false
    setIsEdit(false)
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div onClick={() => {handleAccordion(todo.id); setIsEdit(false)}} className="border boder-[#E4E9F2] rounded-[4px] px-4 py-3">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="title flex gap-2 justify-between">
        <label className="mt-0.5">
          <input type="checkbox" className="custom-checkbox" checked={todo.isCompleted} readOnly onClick={handleIsComplete} />
        </label>
        <div
          className="flex gap-2 w-full justify-between"
        >

          {/* based on isEdit - displaying the p tag or the input */}
          {!isEdit ? <p className={`${todo.isCompleted && "text-[#B6B6B6] line-through"} w-full`}>{todo.title}</p> :
           <input
           onClick={(e) => e.stopPropagation()}
           className={`rounded-[4px] w-full px-[5px] py-0.5 outline outline-1 focus:outline-[1.5px] ${errors.title ? "focus:outline-red-500" : "focus:outline-blue-dark"}`}
           type="text"
           id="title"
           placeholder="Enter task title"
           {...register("title")}
         /> 
          }

          <Image width={24} height={24} src="./arrow-down.svg" alt="arrow-icon" className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} />
        </div>
      </div>
      <div className={`wrapper ${isOpen && "is-open"}`}>
        <div className="inner ml-[25px]">

          {!isEdit ? <p className={`${todo.isCompleted && "text-[#B6B6B6] line-through"} my-3`}>{todo.description}</p> :
          <textarea
          onClick={(e) => e.stopPropagation()}
          className={`rounded-[4px] w-[calc(100%-33px)] outline outline-1 focus:outline-[1.5px] my-2 px-[5px] py-1 ml-0.5 max-h-[40vh] ${errors.description ? "focus:outline-red-500" : "focus:outline-blue-dark"}`}
          {...register("description")}
          id="description"
          name="description"
          rows="4"
          placeholder="Enter task description"
        ></textarea>
          }

          {/* based on isEdit - displaying Edit, Delete, Update and Cancel Button */}

          <div className="flex w-full justify-end">
            {
              !isEdit ? (
                <div className="space-x-2">
                <button type="button" className="border rounded-[4px] px-3 py-1 hover:bg-blue-dark hover:text-white" onClick={(e) => { e.stopPropagation(); 
                  e.preventDefault(); setIsEdit(true) }}>Edit</button>
                <button type="button" className="border rounded-[4px] px-3 py-1 hover:bg-blue-dark hover:text-white" onClick={(e) => {e.stopPropagation(); handleDelete()}}>Delete</button>
              </div>
              ) : (
                <div className="space-x-2 mr-7">
                <button type="submit" className="border rounded-[4px] px-2 sm:px-3 py-1 hover:bg-blue-dark hover:text-white" onClick={(e) => {e.stopPropagation();}}>Update</button>
                <button type="button" className="border rounded-[4px] px-2 sm:px-3 py-1 hover:bg-blue-dark hover:text-white" onClick={(e) => {e.stopPropagation(); setIsEdit(false)}}>Cancel</button>
              </div>
              )
            }
         
        </div>
        </div>
        
      </div>
      </form>
    </div>
  );
}

export default TodoItem;
