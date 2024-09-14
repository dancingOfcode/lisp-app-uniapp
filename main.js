import App from './App.vue';
import {
	createSSRApp
} from 'vue';

export function createApp() {
	const app = createSSRApp(App);
	return {
		app
	};
};