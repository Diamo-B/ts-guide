interface Todo {
    title: string;
    description: string;
}

const todo1: Todo = {
    title: "Delete inactive users",
    description: "..."
};

const fct = (todo:Todo, update:Partial<Todo>) => {
    return {...todo, ...update}
}

