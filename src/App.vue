<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

const todo = ref('')
const todos = ref([
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
])

const handleSubmit = () => {
  if (todo.value === '' || todo.value.length < 3) return
  todos.value.push({
    id: uuidv4(),
    title: todo.value,
    done: false
  })
  todo.value = ''
}

const handleChange = (e: any) => {
  todo.value = e.target.value
}

const removeTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <div class="container max-w-lg mx-auto">
    <h1 class="text-2xl mt-8">Todo List</h1>
    <div class="bg-white rounded-md shadow p-4 mt-4">
      <TodoForm
        :handle-submit="handleSubmit"
        :todo="todo"
        :handle-change="handleChange"
      />
      <TodoList :todos="todos" :remove-todo="removeTodo" />
    </div>
  </div>
</template>

<style css>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
