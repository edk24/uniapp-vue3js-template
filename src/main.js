import {
	createSSRApp
} from "vue"
import App from "./App.vue"

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
