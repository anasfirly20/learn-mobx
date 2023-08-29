import store from "../../store/TodoStore";
import { observer } from "mobx-react";

const TodoPage = (): React.JSX.Element => {
  const handleAdd = () => {
    if (store.newTodo) {
      store.addTodo();
    }
  };

  return (
    <article className="p-[2vw] xl:p-[6vw]">
      <section className="flex justify-center gap-5">
        <input
          type="text"
          className="border-b border-b-slate-400 outline-none w-[70%] xl:w-[50%] px-3"
          onChange={(e) => {
            store.newTodo = e.target.value;
          }}
          value={store.newTodo}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button
          className={`text-white font-semibold w-[30%] xl:w-[5%] py-3 px-3 ${
            store.newTodo
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
        {store.todos.map((e) => {
          return (
            <section key={e.id} className="flex gap-3">
              <input type="checkbox" checked={e.status} onChange={() => {}} />
              <p className={e.status ? "line-through" : ""}>{e.name}</p>
            </section>
          );
        })}
      </section>
    </article>
  );
};

export default observer(TodoPage);
