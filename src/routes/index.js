import { createRouter, createWebHistory } from "vue-router";

import KeepAlive from "../views/KeepAliveDemo.vue";
import Suspense from "../views/SuspenseDemo.vue";
import Teleport from "../views/TeleportDemo.vue";
import Transition from "../views/TransitionDemo.vue";
import TransitionGroup from "../views/TransitionGroupDemo.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/keepAlive", name: "KeepAlive", component: KeepAlive },
    { path: "/suspense", name: "Suspense", component: Suspense },
    { path: "/teleport", name: "Teleport", component: Teleport },
    { path: "/transition", name: "Transition", component: Transition },
		{ path: "/transitionGroup", name: "TransitionGroup", component: TransitionGroup },
  ],
})

export default router;
