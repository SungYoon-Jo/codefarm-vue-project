<template>
  <div id="shopping-cart" class="shopping-cart">
    <!-- 디렉티브 -->
    <!-- 디렉티브는 HTML 태그에 특별한 기능을 부여하는 속성입니다. 예를 들어 v-if는 조건부 렌더링을, v-for는 리스트 렌더링을 지원합니다. -->
    <!-- v-if 조건부 렌더링 -->
    <!-- v-if 조건부 렌더링은 특정 조건에 따라 요소를 렌더링하거나 숨길 수 있습니다. -->
    <!-- v-for 리스트 렌더링 -->
    <!-- v-for 리스트 렌더링은 배열 데이터를 기반으로 요소 리스트를 렌더링합니다. -->
    <div v-if="cart.length > 0" class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img class="item-img" :src="item.image" :alt="item.name" />
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item-price">{{ formatPrice(item.price) }}원</p>
        <button @click="removeFromCartWithToast(item.id)" class="remove-btn">
          삭제
        </button>
      </div>
      <p class="total">
        <span class="total-amount">총 금액 {{ formatPrice(cartTotal) }}원</span>
      </p>
      <!-- $parent: 현재 컴포넌트의 부모 컴포넌트를 가리키는 내장 속성입니다. ex) $parent.currentView = 'CheckoutForm' -->
      <button
        @click="$parent.currentView = 'CheckoutForm'"
        class="checkout-btn"
      >
        결제하기
      </button>
    </div>
    <p v-else class="empty-cart">장바구니가 비어있습니다.</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";

export default {
  name: "ShoppingCart",
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal", "formattedPrice"]),
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    formatPrice(price) {
      return this.formattedPrice(price);
    },
    async removeFromCartWithToast(productId) {
      await this.removeFromCart(productId);
      this.toast.info("상품이 장바구니에서 제거되었습니다.");
    },
  },
};
</script>

<style src="@/assets/css/shoppingCart.css"></style>
