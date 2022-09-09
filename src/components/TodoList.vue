<script setup lang="ts">
import store from '../store'
export interface Todo {
  id: string
  title: string
  done: boolean
}
defineProps<{ todos: Todo[] }>()
</script>

<template>
  <TransitionGroup
    name="list"
    tag="ul"
    class="flex flex-col space-y-2"
    :class="{ 'mt-8': todos?.length > 0 }"
  >
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="bg-gray-50 border border-gray-200 py-2 px-4 rounded-md text-gray-500 flex flex-row justify-center items-center"
    >
      <span :class="{ done: todo.done }">{{ todo.title }}</span>
      <div class="ml-auto flex flex-row justify-center items-center">
        <button
          v-if="todo.done"
          type="button"
          class="mr-2 text-red-400 text-sm"
          @click="store.dispatch('removeTodo', todo.id)"
        >
          remover
        </button>
        <input type="checkbox" v-model="todo.done" class="ml-auto mt-1" />
      </div>
    </li>
  </TransitionGroup>
</template>

<style css scoped>
.done {
  @apply line-through text-blue-500;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
