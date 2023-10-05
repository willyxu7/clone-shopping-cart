<template>
  <div class="main-button">
    <button type="button"><slot>Click Me</slot></button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style scoped>
.main-button {
  display: flex;
  justify-content: center;
}

.main-button button {
  background-color: var(--primary-color);
  cursor: pointer;
  border: none;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  transition: 0.7s;
}

.main-button button:hover {
  opacity: 0.6;
}
</style>