import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import React from "react";

const TodoItem = React.forwardRef( ({ todo, removeTodo, updateTodo, ...prosp }, ref) => {
  const { id, title, completed } = todo;

  return (
    <article {...prosp} ref={ref} className="flex gap-4 px-4  py-4 border-b-gray-400 border-b dark:bg-gray-800">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${completed ? `   bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center` : `inline-block `}`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p className={`text-gray-600 grow dark:text-gray-400 ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
})

export default TodoItem;
