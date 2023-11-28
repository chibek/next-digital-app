"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Todo } from "@/types";

interface UserTodo {
  todo: Todo;
}
export default function UserTodo({ todo }: UserTodo) {
  const [checked, setChecked] = useState(todo.completed);
  return (
    <div key={todo.id} className="flex items-center space-x-2">
      <Checkbox
        id={todo.id.toString()}
        checked={checked}
        onCheckedChange={() => setChecked((state) => !state)}
      />
      <label
        htmlFor={todo.id.toString()}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {todo.title}
      </label>
    </div>
  );
}
