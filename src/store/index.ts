import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

interface Todo {
  id: string
  title: string
  done: boolean
}

export default createStore({
  state: {
    todos: [] as Todo[]
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    REMOVE_TODOS(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    ADD_TODOS(state, payload) {
      state.todos.push(payload)
    }
  },
  actions: {
    fetchTodos(context) {
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
      context.commit('SET_TODOS', todos)
    },
    removeTodo(context, payload) {
      context.commit('REMOVE_TODOS', payload)
    },
    addTodos(context, payload) {
      context.commit('ADD_TODOS', payload)
    }
  },
  getters: {
    $allTodos(state) {
      return state.todos
    }
  }
})
