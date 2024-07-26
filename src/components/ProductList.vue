<template>
  <div class="product-list">
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-item">
        <a @click.prevent="selectProduct(product)">
          <img :src="product.image" :alt="product.name" />
          <!-- 데이터 바인딩 -->
          <!-- 데이터 바인딩을 통해 Vue 인스턴스의 데이터를 템플릿에 연결할 수 있습니다. 이로 인해 데이터가 변경될 때 UI도 자동으로 업데이트됩니다. -->
          <h3>{{ product.name }}</h3>
          <p class="price">{{ formatPrice(product.price) }}원</p>
          <p class="option">+<span>3</span> Colors</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["cartTotal", "formattedPrice"]),
  },
  methods: {
    selectProduct(product) {
      this.$emit("selectProduct", product);
    },
    formatPrice(price) {
      return this.formattedPrice(price);
    },
  },
};
</script>

<style src="@/assets/css/productList.css"></style>
