<script src="../../services/CategoryService.ts"></script>
<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <router-link to="/">All Products</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'smartphones' }">Smartphones</router-link>
        </li>
        <li>
          <router-link to="/about">Tablets</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getCategories} from "@/services/CategoryService";

export default defineComponent({
  name: "Navbar",
  async mounted() {
    await getCategories();
  }
})
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  padding: 0 20px;
}

li a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

li a:active {
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}


a {
  color: black;
  font-size: 20px;
}

</style>