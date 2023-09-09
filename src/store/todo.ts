import { reactive } from "vue";
import { v4 as uuidv4 } from "uuid";
import { TodoState } from "../models/todo-models";

const state: TodoState = reactive({
  todoTitle: "",
  todoList: [],
  filter: "all",
});

const methods = {
  addTodo() {
    !!state.todoTitle.length &&
      state.todoList.push({
        id: uuidv4(),
        title: state.todoTitle,
        completed: false,
        isEdit: false,
      });

    state.todoTitle = "";
  },

  completeTodo(Id: string | number) {
    state.todoList.map(
      (item) => item.id === Id && (item.completed = !item.completed)
    );
  },

  deleteTodo(Id: string | number) {
    state.todoList = state.todoList.filter(({ id }) => id !== Id);
  },

  editTodo(Id: string | number, newTitle: string) {
    state.todoList.map((item) => {
      if (item.id === Id) {
        item.isEdit = true;
        item.title = newTitle;
      }
    });
  },

  completeEditTodo(Id: string | number) {
    state.todoList.map((item) => item.id === Id && (item.isEdit = false));
  },

  completeAllTodo() {
    state.todoList.map(
      (item) => !item.completed && (item.completed = !item.completed)
    );
  },

  clearCompletedTodo() {
    state.todoList = state.todoList.filter(
      (item, index, arr) => !item.completed && arr[index - 1] !== item
    );
    state.filter = "all";
  },
};

export default {
  state,
  methods,
};
