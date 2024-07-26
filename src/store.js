// Vuex
// Vuex는 Vue.js 애플리케이션의 상태 관리를 위한 중앙 집중식 저장소입니다. 상태(state), 변이(mutations), 액션(actions), 게터(getters)를 통해 상태를 관리합니다.
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "뮈글러 - 스파이럴 01 M01",
        price: 480000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 01 M01을 소개합니다. 확장성이 느껴지는 와이드한 고글 실루엣의 프레임에 그레이 렌즈를 가미한 아이템입니다. 프레임 상단과 옆면 부분에 뮈글러의 시그니처 스파이럴 디테일을 더하여 기하학적이면서도 강렬한 에너지를 표현하였습니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 시선을 사로잡고, 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/S/P/SPIRAL-02-M01-002_1.jpg",
      },
      {
        id: 2,
        name: "뮈글러 - 스파이럴 01 CS1",
        price: 480000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 01 CS1을 소개합니다. 확장성이 느껴지는 와이드한 고글 실루엣이 돋보이며, 현대적인 크롬 실버 색상의 프레임과 대조적인 바이올렛 미러 렌즈가 조화를 이루는 아이템입니다. 프레임 상단과 옆면 부분에 뮈글러의 시그니처 스파이럴 디테일을 더하여 기하학적이면서도 강렬한 에너지를 표현하였습니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 시선을 사로잡고, 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/S/P/SPIRAL-01-CS1_2_1.jpg",
      },
      {
        id: 3,
        name: "뮈글러 - 스파이럴 01 C1",
        price: 480000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 01 C1을 소개합니다. 확장성이 느껴지는 와이드한 고글 실루엣이 돋보이며, 클리어 색상의 프레임과 클리어 미러 렌즈가 조화를 이루며 현대적인 미학을 담아낸 아이템입니다. 프레임 상단과 옆면 부분에 뮈글러의 시그니처 스파이럴 디테일을 더하여 기하학적이면서도 강렬한 에너지를 표현하였습니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 시선을 사로잡고, 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/S/P/SPIRAL-02-C1_2_1_2.jpg",
      },
      {
        id: 4,
        name: "뮈글러 - 스파이럴 02 M01",
        price: 380000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 02 M01을 소개합니다. 과감하게 뻗은 고글 실루엣의 프레임과 그레이 렌즈가 매트한 질감과 어우러지며 현대적인 멋을 더합니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 조화를 이루며 강렬한 아이덴티티를 완성하고 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/s/p/spiral-02-m01_2_1_1_2.jpg",
      },
      {
        id: 5,
        name: "뮈글러 - 스파이럴 02 CS1",
        price: 380000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 02 CS1을 소개합니다. 과감하게 뻗은 고글 실루엣이 돋보이며, 현대적인 크롬 실버 색상의 프레임에 그레이 미러 렌즈가 화려한 감각을 더합니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 조화를 이루며 강렬한 아이덴티티를 완성하고 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/S/P/SPIRAL-02-CS1_2_1.jpg",
      },
      {
        id: 6,
        name: "뮈글러 - 스파이럴 02 V2",
        price: 380000,
        description:
          "젠틀몬스터 x 뮈글러 협업 컬렉션의 스파이럴 02 V2를 소개합니다. 과감하게 뻗은 고글 실루엣이 돋보이며, 비비드한 블루 색상의 프레임과 그레이 렌즈가 매트한 질감과 어우러지며 현대적인 멋을 더합니다. 템플 부분에 양각으로 표현한 유기적인 라인 디테일과 크롬 로고 장식이 조화를 이루며 강렬한 아이덴티티를 완성하고 프레임 안쪽에는 고무 소재의 노즈 패드를 더하여 안정감을 선사합니다.",
        image:
          "https://www-prd-kr.gentlemonster.com/media/catalog/product/cache/6c6f229b8a7ab97f51028776641e27d1/S/P/SPIRAL-02-V1_2_1.jpg",
      },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
  },
  getters: {
    // cart에 있는 cartTotal 금액
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price, 0);
    },
    // 새로운 getter 추가
    formattedPrice: () => (price) => {
      return price.toLocaleString("ko-KR");
    },
    // 각 상품의 가격을 포맷팅하는 getter
    productsWithFormattedPrice(state, getters) {
      return state.products.map((product) => ({
        ...product,
        formattedPrice: getters.formattedPrice(product.price),
      }));
    },
  },
});
