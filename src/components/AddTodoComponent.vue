<template>
  <!-- .prevent позволяет обновить -->
  <form @submit.prevent="onSubmit">
    <!-- Ввод.
    v-model="title" - превращает title в модель -->
    <input type="test" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  // data() как и лругие () являються полями.
  data() {
    return {
      title: ''
    }
  },

  methods: {
    onSubmit() {
      // Выводит ранее созданную модель title
      console.log('Submit', this.title)
      // trim() проверка
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        // Сообщение app компоненту об поле add-todo
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>


<style scoped>
  input {
    width: 400px;
  }
</style>
