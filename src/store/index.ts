import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  title: string
  done: boolean
}

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[]
  }),
  getters: {
    allTodos(state) {
      return state.todos
    }
  },
  actions: {
    fetchTodos() {
      const todos = [
        {
          id: uuidv4(),
          title: 'Todo 1',
          done: true
        },
        {
          id: uuidv4(),
          title: 'Todo 2',
          done: false
        },
        {
          id: uuidv4(),
          title: 'Todo 3',
          done: false
        },
        {
          id: uuidv4(),
          title: 'Todo 4',
          done: true
        }
      ]
      this.todos = todos
    },
    removeTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    addTodos(payload: Todo) {
      this.todos.push(payload)
    }
  }
})
