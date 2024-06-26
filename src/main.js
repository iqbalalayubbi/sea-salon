import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.component("Iconify", Icon);
app.use(router);

app.mount("#app");
