import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/style.scss";
import "animate.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import router from "./router";

/* add icons to the library */
library.add(faBars, faXmark);

createApp(App)
  .use(router)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
