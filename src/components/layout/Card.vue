<template>
  <div class="card">
    <slot name="card-header"></slot>
    <slot name="card-content"></slot>
  </div>
</template>

<script lang="ts">

export default {
  name: "Card",
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 15px;
  max-width: 250px;
  padding: 30px;
  box-sizing: border-box;
}
</style>