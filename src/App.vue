<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import { computed } from '@vue/reactivity'
import store from './store'

store.dispatch('fetchTodos')
const $allTodos = computed(() => store.getters.$allTodos)
</script>

<template>
  <div class="container max-w-lg mx-auto">
    <h1 class="text-2xl mt-8">Todo List</h1>
    <div class="bg-white rounded-md shadow border border-gray-100 p-4 mt-4">
      <TodoForm />
      <TodoList :todos="$allTodos" />
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
