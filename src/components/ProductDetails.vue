<template>
  <div class="product-details" v-if="product">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <div class="product-header">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">{{ formatPrice(product.price) }}원</p>
      </div>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-actions">
        <!-- 이벤트 핸들링 -->
        <!-- Vue는 v-on 디렉티브를 사용하여 이벤트를 처리합니다. -->
        <button class="btn btn-primary" @click="addToCartWithToast(product)">
          장바구니에 추가
        </button>
        <button class="btn btn-secondary" @click="goBack">
          목록으로 돌아가기
        </button>
      </div>
    </div>
  </div>
  <div v-else class="product-not-found">
    <p>상품을 찾을 수 없습니다.</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useToast } from "vue-toastification";

export default {
  name: "ProductDetails",
  // emits 옵션은 컴포넌트 간 통신을 위해 사용자 정의 이벤트("go-back", "select-product")를 정의하고 있습니다.
  emits: ["go-back", "select-product"],
  // 컴포넌트 구조 및 통신
  // 컴포넌트는 독립적으로 개발할 수 있는 UI 구성 요소입니다. 부모 컴포넌트와 자식 컴포넌트 간의 통신은 props와 이벤트를 통해 이루어집니다.
  props: {
    product: Object, // 부모 컴포넌트로부터 받는 상품 정보
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    ...mapGetters(["formattedPrice"]),
  },
  methods: {
    ...mapActions(["addToCart"]),
    goBack() {
      this.$emit("goBack"); // 목록으로 돌아가기 이벤트 발생
    },
    formatPrice(price) {
      return this.formattedPrice(price);
    },
    async addToCartWithToast(product) {
      try {
        await this.addToCart(product);
        this.toast.success("상품이 장바구니에 추가되었습니다.");
      } catch (error) {
        this.toast.error("상품 추가에 실패했습니다.");
      }
    },
  },
};
</script>

<style src="@/assets/css/productDetails.css"></style>
