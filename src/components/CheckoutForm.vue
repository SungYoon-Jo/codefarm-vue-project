<template>
  <div class="checkout-container">
    <div class="checkout-form">
      <!-- @submit.prevent="processCheckout": 코드는 폼이 제출될 때 processCheckout 메서드를 실행하고, 페이지 새로고침을 방지하는 것입니다. -->
      <form @submit.prevent="processCheckout">
        <div class="form-group">
          <label for="name"><span>이름</span></label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email"><span>이메일</span></label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="address"><span>주소</span></label>
          <input type="text" id="address" v-model="address" required />
        </div>
        <button type="submit" class="submit-btn">결제 완료</button>
      </form>
    </div>

    <aside class="order-summary">
      <div class="order-title">
        <h3>주문 내역</h3>
        <span>
          <a @click.prevent="$parent.currentView = 'ShoppingCart'">수정</a>
        </span>
      </div>
      <ul>
        <li v-for="item in cart" :key="item.id" class="order-item">
          <img :src="item.image" :alt="item.name" class="order-item-image" />
          <div class="order-item-details">
            <p class="order-item-name">{{ item.name }}</p>
            <p class="order-item-price">{{ formatPrice(item.price) }}원</p>
          </div>
        </li>
      </ul>
      <div class="order-total">
        <p>
          총 합계: <span>{{ formatPrice(cartTotal) }}원</span>
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CheckoutForm",
  emits: ["go-back", "select-product"],
  // 데이터 속성
  // 데이터 속성은 Vue 인스턴스에서 관리하는 데이터입니다.
  data() {
    return {
      name: "",
      email: "",
      address: "",
    };
  },
  // 계산된 속성
  // 계산된 속성은 종속된 데이터가 변경될 때 자동으로 다시 계산되는 속성입니다.
  computed: {
    // spread 연산자
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal", "formattedPrice"]),
  },
  methods: {
    processCheckout() {
      alert("결제가 완료되었습니다!");
      this.$store.state.cart = [];
      this.$parent.currentView = "ProductList";
    },
    formatPrice(price) {
      return this.formattedPrice(price);
    },
    goBack() {
      this.$emit("go-back");
    },
  },
};
</script>

<style src="@/assets/css/checkoutForm.css"></style>
