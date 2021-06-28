import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue"

const routes = [
		{
				name: "Login",
				path: "/login",
				meta: {
						title: "登录"
				},
				component: () => import("../views/Login.vue")
		},
		{
				name: "home",
				path: "/",
				component: Home
		}
]

const router = createRouter({
		history: createWebHashHistory(),
		routes
})

export default router