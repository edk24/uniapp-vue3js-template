import {
	createSSRApp
} from "vue"
import App from "./App.vue"

// base css
import "@/styles/base.css"

// tailwind
import "@/styles/tailwind.css"

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

export function createApp() {
	const app = createSSRApp(App);
	
	app.use(pinia)

	return {
		app,
	};
}
