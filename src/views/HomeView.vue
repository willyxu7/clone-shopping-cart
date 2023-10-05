<script setup lang="ts">
import Card from "@/components/layout/Card.vue";
import BaseButton from "@/components/layout/BaseButton.vue";
import CardHeader from "@/components/layout/CardHeader.vue";
import CardContent from "@/components/layout/CardContent.vue";
import {useProductStore} from "@/store/product";
import {useHomeStore} from "@/store/home";
import {useCategoryStore} from "@/store/category";

const homeStore = useHomeStore();
const productStore = useProductStore();
const categoryStore = useCategoryStore();
// homeStore.initStateValue();

homeStore.isLoading = true
productStore.getProducts();
categoryStore.getCategories();
homeStore.isLoading = false;

</script>

<template>
    <div class="container">
      <!-- loading -->
      <div class="loading" v-if="homeStore.isLoading">
        Loading products...
      </div>

      <template v-for="product in homeStore.products">
        <Card>
          <template v-slot:card-header>
            <CardHeader>
              <div class="image-container">
                <img :src="product.images[0]" alt="samsung">
              </div>
            </CardHeader>
          </template>
          <template v-slot:card-content>
            <CardContent>
              <p class="price-label">IDR {{ product.price }}</p>
              <BaseButton>Add to Card</BaseButton>
              <p class="product-title">{{ product.title }}</p>
            </CardContent>
          </template>
        </Card>
      </template>
<!--      <Card>-->
<!--        <template v-slot:card-header>-->
<!--          <CardHeader>-->
<!--            <div class="image-container">-->
<!--              <img src="img/samsung.jpg" alt="samsung">-->
<!--            </div>-->
<!--          </CardHeader>-->
<!--        </template>-->
<!--        <template v-slot:card-content>-->
<!--          <CardContent>-->
<!--            <p class="price-label">IDR 1.000.000</p>-->
<!--            <BaseButton>Add to Card</BaseButton>-->
<!--            <p class="product-title">Samsung S21 5G lorem aa</p>-->
<!--          </CardContent>-->
<!--        </template>-->
<!--      </Card>-->
<!--      <Card>-->
<!--        <template v-slot:card-header>-->
<!--          <CardHeader>-->
<!--            <div class="image-container">-->
<!--              <img src="img/samsung.jpg" alt="samsung">-->
<!--            </div>-->
<!--          </CardHeader>-->
<!--        </template>-->
<!--        <template v-slot:card-content>-->
<!--          <CardContent>-->
<!--            <p class="price-label">IDR 1.000.000</p>-->
<!--            <BaseButton>Add to Card</BaseButton>-->
<!--            <p class="product-title">Samsung S21 5G</p>-->
<!--          </CardContent>-->
<!--        </template>-->
<!--      </Card>-->
<!--      <Card>-->
<!--        <template v-slot:card-header>-->
<!--          <CardHeader>-->
<!--            <div class="image-container">-->
<!--              <img src="img/samsung.jpg" alt="samsung">-->
<!--            </div>-->
<!--          </CardHeader>-->
<!--        </template>-->
<!--        <template v-slot:card-content>-->
<!--          <CardContent>-->
<!--            <p class="price-label">IDR 1.000.000</p>-->
<!--            <BaseButton>Add to Card</BaseButton>-->
<!--            <p class="product-title">Samsung S21 5G</p>-->
<!--          </CardContent>-->
<!--        </template>-->
<!--      </Card>-->
<!--      <Card>-->
<!--        <template v-slot:card-header>-->
<!--          <CardHeader>-->
<!--            <div class="image-container">-->
<!--              <img src="img/samsung.jpg" alt="samsung">-->
<!--            </div>-->
<!--          </CardHeader>-->
<!--        </template>-->
<!--        <template v-slot:card-content>-->
<!--          <CardContent>-->
<!--            <p class="price-label">IDR 1.000.000</p>-->
<!--            <BaseButton>Add to Card</BaseButton>-->
<!--            <p class="product-title">Samsung S21 5G</p>-->
<!--          </CardContent>-->
<!--        </template>-->
<!--      </Card>-->
<!--      <Card>-->
<!--        <template v-slot:card-header>-->
<!--          <CardHeader>-->
<!--            <div class="image-container">-->
<!--              <img src="img/samsung.jpg" alt="samsung">-->
<!--            </div>-->
<!--          </CardHeader>-->
<!--        </template>-->
<!--        <template v-slot:card-content>-->
<!--          <CardContent>-->
<!--            <p class="price-label">IDR 1.000.000</p>-->
<!--            <BaseButton>Add to Card</BaseButton>-->
<!--            <p class="product-title">Samsung S21 5G</p>-->
<!--          </CardContent>-->
<!--        </template>-->
<!--      </Card>-->
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      isLoading: false as boolean
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 20px 10px;
  min-width: 300px;
  max-width: 300px;
}

.card-header {
  margin-bottom: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
}


.image-container img {
  max-height: 250px;
  max-width: 250px;
}

p {
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
}

.price-label {
  display: flex;
  justify-content: center;
}

.product-title {
  display: flex;
  justify-content: center;
  color: var(--primary-color);
}
</style>