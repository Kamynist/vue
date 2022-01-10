<template>
  <div>
    <ul>
      <!-- Используется для работы с элементами списка
      v-bind:todo="todo"
      По сути создает глоб переменную

      нужно для корректной работы
      v-bind:key="todo.id"-->
      <TodoItem
          v-for="(todo, i) of todos"
          v-bind:todo="todo"
          v-bind:key="todo.id"
          v-bind:index="i"
          v-on:remove-todo="remove_todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props: ['todos'],
  components: {
    TodoItem
  },

  methods: {
    remove_todo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>