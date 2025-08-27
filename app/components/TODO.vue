<template>
  <div class="todo-container">
    <h1>To-Do List</h1>
    
    <div class="input-group">
      <input 
        v-model="newTask" 
        @keyup.enter="addTask"
        type="text" 
        placeholder="Add a new task"
      >
      <button @click="addTask">Add</button>
    </div>

    <ul class="todo-list">
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <input 
          type="checkbox" 
          v-model="task.completed"
        >
        <span>{{ task.text }}</span>
        <button @click="deleteTask(index)" class="delete-btn">×</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({
      text: newTask.value,
      completed: false
    })
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 2rem auto;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
}

button {
  padding: 0.5rem 1rem;
  background: none;
  border: 1px solid #e0e0e0;
  color: #333;
}

button:hover {
  background: #f5f5f5;
}

.todo-list {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.completed span {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  font-size: 1.2rem;
}
</style>
