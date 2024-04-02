"use client"

import React from 'react'
import { useForm } from 'react-hook-form'

function AddTodoForm() {
const { register, handleSubmit, formState: { errors }} = useForm()

const onSubmit = (data) => console.log(data)
  return (
    <div className='border border-red-500 w-[40%] min-h-screen bg-blue-light'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    </div>
  )
}

export default AddTodoForm