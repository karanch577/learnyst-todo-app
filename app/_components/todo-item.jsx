"use client";

import { toggleIsComplete } from "@/lib/features/todos/todosSlice";
import React from "react";
import { useDispatch } from "react-redux";

function TodoItem({ todo, isOpen, handleAccordion }) {
  const dispatch = useDispatch();

  const handleIsComplete = (e) => {
    // preventing event bubbling
    e.stopPropagation();
    dispatch(toggleIsComplete(todo?.id));
  };


  return (
    <div onClick={() => handleAccordion(todo.id)} className="border boder-[#E4E9F2] rounded-[4px] px-4 py-3">
      <div className="title flex gap-2 justify-between">
        <label>
          <input type="checkbox" className="custom-checkbox" checked={todo.isCompleted} onClick={handleIsComplete} />
        </label>
        <div
          
          className="flex gap-2 w-full justify-between"
        >
          <p className={`${todo.isCompleted && "text-[#B6B6B6] line-through"}`}>{todo.title}</p>
          <img src="./arrow-down.svg" alt="arrow-icon" className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all`} />
        </div>
      </div>
      <div className={`wrapper ${isOpen && "is-open"}`}>
        <div className="inner ml-[25px]">
          <p className={`${todo.isCompleted && "text-[#B6B6B6] line-through"}`}>{todo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
