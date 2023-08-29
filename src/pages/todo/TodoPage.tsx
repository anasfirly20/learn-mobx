import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TTodo = {
  id: string;
  name: string;
  status: boolean;
};

export default function TodoPage(): React.JSX.Element {
  const [initial, setInitial] = useState("");
  const [todo, setTodo] = useState<TTodo[]>([
    {
      id: uuidv4(),
      name: "Wash Laundry",
      status: false,
    },
  ]);

  const handleAdd = () => {
    if (initial) {
      const newTodo = {
        id: uuidv4(),
        name: initial,
        status: false,
      };
      setTodo([...todo, newTodo]);
      setInitial("");
    }
  };

  const handleCheckboxChange = (id: string) => {
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, status: !todoItem.status }
          : todoItem
      )
    );
  };

  return (
    <article className="px-[6vw] py-[10vh]">
      <section className="flex justify-center gap-5">
        <input
          type="text"
          className="border-b border-b-slate-400 outline-none w-[50%] px-3"
          onChange={(e) => {
            setInitial(e.target.value);
          }}
          value={initial}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button
          className={`text-white font-semibold w-[5%] py-3 px-3 ${
            initial
              ? "bg-blue-600 hover:bg-blue-500 active:bg-blue-600"
              : "bg-slate-200 cursor-not-allowed"
          }`}
          type="button"
          onClick={handleAdd}
        >
          ADD
        </button>
      </section>
      <section className="mt-10">
        {todo.map((e) => {
          return (
            <section key={e.id} className="flex gap-3">
              <input
                type="checkbox"
                checked={e.status}
                onChange={() => handleCheckboxChange(e.id)}
              />
              <p className={e.status ? "line-through" : ""}>{e.name}</p>
            </section>
          );
        })}
      </section>
    </article>
  );
}
