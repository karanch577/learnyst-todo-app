"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addTodo } from "@/lib/features/todos/todosSlice";
import { v4 as uuidv4 } from 'uuid';

const addTodoFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
});

function AddTodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(addTodoFormSchema)
  });

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(addTodo({...data, isCompleted: false, id: uuidv4() }))

    reset()
  }
  return (
    <div className="w-full md:w-[40%] min-h-screen bg-blue-light p-6 sm:p-12">
      <h3 className="text-[28px] text-blue-dark font-medium mt-10">Add Task</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-6">
          <label htmlFor="title" className="text-[#191919] mb-1.5">Task Title</label>
          <input
            className="rounded-[8px] p-2.5 focus:outline-blue-dark"
            type="text"
            id="title"
            placeholder="Enter task title"
            {...register("title")}
          />
          {errors.title ? <p className="error text-sm text-red-500">{errors.title.message}</p> : <p className="h-[20px]"></p>}
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="description" className="text-[#191919] mb-1.5">Task Description</label>
          <textarea
            className="rounded-[8px] p-2 focus:outline-blue-dark"
            {...register("description")}
            id="description"
            name="description"
            rows="4"
            placeholder="Enter task description"
          ></textarea>
          {errors.description ? (
            <p className="error text-sm text-red-500">{errors.description.message}</p>
          ) : <p className="h-[20px]"></p>}
        </div>

        <button type="submit" className="bg-blue-dark text-white rounded-[4px] w-full mt-12 p-2.5 text-[14px] font-semibold">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
