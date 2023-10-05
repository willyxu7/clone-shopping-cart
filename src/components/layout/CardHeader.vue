<template>
  <div class="card-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "CardHeader"
}
</script>

<style scoped>
.card-header {
  min-height: 250px;
}
</style>