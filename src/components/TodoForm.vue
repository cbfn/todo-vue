<script setup lang="ts">
defineProps<{
  handleSubmit: (e: Event) => void
  todo: string
  handleChange: (e: Event) => void
}>()
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
