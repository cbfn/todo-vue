<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useTodos } from '../store'

const todo = ref('')
const todosStore = useTodos()
const handleSubmit = () => {
  if (todo.value === '' || todo.value.length < 3) return
  todosStore.addTodos({
    id: uuidv4(),
    title: todo.value,
    done: false
  })
  todo.value = ''
}

const handleChange = (e: any) => {
  todo.value = e.target.value
}
</script>

<template>
  <form class="flex flex-row gap-2" @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Todo"
      class="border border-gray-200 px-4 py-2 rounded-md w-full focus:border-blue-400"
      @input="handleChange"
      v-model="todo"
    />
    <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded-md">
      Add
    </button>
  </form>
</template>
