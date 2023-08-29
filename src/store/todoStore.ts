import { makeAutoObservable } from "mobx";

type TTodos = {
    id: number;
    name: string;
    status: boolean;
};

// Function add Todo
const addTodo = (todos: TTodos[], name: string) => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        name,
        status: false,
    },
];

class Todos {
    todos: TTodos[] = [];
    newTodo: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        this.newTodo = "";
    }

}

const store = new Todos();

export default store;