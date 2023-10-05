<template>
  <div class="layout">
    <header>
      <div class="container">
        <div class="logo">
          <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
        </div>
        <Navbar />
      </div>
    </header>

    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Navbar from "@/components/layout/Navbar.vue";

export default defineComponent({
  name: "Layout",
  components: {Navbar}
})
</script>

<style scoped>

header {
  display: flex;
  justify-content: center;
}

header .container {
  width: 100%;
}

.logo {
  display: flex;
  justify-content: center;
}

</style>