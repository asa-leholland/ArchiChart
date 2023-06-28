import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    developerMode: false, // Initial value for the developer mode toggle
  },
});

export default app;
