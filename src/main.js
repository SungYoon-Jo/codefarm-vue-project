// 인스턴스
// Vue는 새로운 Vue 인스턴스를 생성하여 시작합니다. 인스턴스는 애플리케이션의 모든 데이터를 관리합니다.
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/reset.css";

createApp(App).use(store).mount("#app");
