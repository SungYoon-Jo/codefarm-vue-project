<!-- 템플릿 -->
<!-- 템플릿은 HTML 기반의 마크업 언어로 UI 구조를 정의합니다. 템플릿은 Vue 인스턴스의 데이터를 바인딩하여 동적으로 렌더링합니다. -->
<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <a @click="currentView = 'ProductList'"
            ><img src="@/assets/images/logo.png" alt="로고" class="logo"
          /></a>
        </li>
        <li>
          <nav>
            <a @click="currentView = 'ProductList'">상품 목록</a>
          </nav>
        </li>
        <li>
          <a @click="currentView = 'ShoppingCart'" id="shoppingCart"
            >장바구니</a
          >
        </li>
      </ul>
    </header>
    <!-- 동적 컴포넌트 렌더링 기능을 사용하고 있습니다. -->
    <!-- currentView 데이터 속성의 값에 따라 적절한 컴포넌트 이름을 반환합니다. -->
    <!-- 부모 컴포넌트인 App.vue는 자식 컴포넌트들과 데이터와 이벤트를 공유할 수 있습니다. -->
    <main>
      <component
        :is="currentViewComponent"
        :product="selectedProduct"
        @goBack="goBackToList"
        @selectProduct="selectProduct"
      ></component>
    </main>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import CheckoutForm from "./components/CheckoutForm.vue";
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  // 컴포넌트 (지역 컴포넌트)
  // 컴포넌트는 재사용 가능한 UI 구성 요소입니다. 컴포넌트는 독립적으로 개발하고 유지 관리할 수 있습니다.
  components: {
    ProductList,
    ShoppingCart,
    CheckoutForm,
    ProductDetails,
  },
  data() {
    return {
      currentView: "ProductList",
      selectedProduct: null, // 선택된 상품 정보를 저장할 변수
    };
  },
  computed: {
    currentViewComponent() {
      return this.currentView === "ProductList"
        ? "ProductList"
        : this.currentView === "ProductDetails"
        ? "ProductDetails"
        : this.currentView === "ShoppingCart"
        ? "ShoppingCart"
        : "CheckoutForm";
    },
  },
  methods: {
    selectProduct(product) {
      this.selectedProduct = product; // 선택된 상품 저장
      this.currentView = "ProductDetails"; // 상품 상세 페이지로 전환
    },
    goBackToList() {
      this.currentView = "ProductList"; // 목록으로 돌아가기
      this.selectedProduct = null; // 선택된 상품 초기화
    },
  },
};
</script>

<style src="@/assets/css/app.css"></style>
