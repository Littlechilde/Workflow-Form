import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
require("@/utils/CustomUtil");

Vue.config.productionTip = false;
Vue.use(ElementUI);
import "@/assets/theme.less";
import "@/assets/global.css";
import "@/assets/iconfont/iconfont.css";

import Ellipsis from "@/components/common/Ellipsis";
import WDialog from "@/components/common/WDialog";
import Tip from "@/components/common/Tip";

Vue.use(ElementUI);
Vue.use(Ellipsis);
Vue.use(WDialog);
Vue.use(Tip);
Vue.prototype.$deepCopy = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
