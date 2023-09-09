export type TodoState = {
  todoTitle: string;
  todoList: ITodo[];
  filter: string;
};

export interface ITodo {
  id: number | string;
  title: string;
  completed: boolean;
  isEdit: boolean;
}
