<template>
  <div>
    <h2>Todo-list</h2>
    <!-- @add-todo прослушка компонента -->
    <h3>Add-todo</h3>
    <AddTodo
        @add-todo="addTodo"
    />

    <select v-model="filter">
      <option value="all"> All </option>
      <option value="completed"> Completed </option>
      <option value="not-completed"> Not completed </option>
    </select>

    <hr>
    <Loader v-if="loading" />

    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="remove_todo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
// Импорт функций и т.п. Собака работает так как и в Django
import TodoList from '@/components/Todolist'
import AddTodo from '@/components/AddTodoComponent'
import Loader from '@/components/Loader'

//
export default {
  name: 'App',
  data() {
    return {

      /* Заполненый список элементов
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить мясо', completed: false},
        {id: 3, title: 'Купить молоко', completed: false}]
    }
      * */

      // Заполненый список элементов не нужен, поэтому он пустой
      todos: [],
      loading: true,
      filter: 'all'
    }
  },

// Компонент. Взятия данных с сервера
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
        .then(response => response.json())
        .then(json => {

          // Ограничение скорости загрузки стр
          setTimeout(() => {
            this.todos = json, this.loading = false

          }, 400)

        })
  },

  // Вычисляемое свойство
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return this.filter
    }
  },

  // Описание функций
  methods: {
    remove_todo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },

    addTodo(todo) {
      this.todos.push(todo)
    }
  },

  // Объявление компонентов
  components: {
    TodoList, AddTodo, Loader
  }
}
</script>