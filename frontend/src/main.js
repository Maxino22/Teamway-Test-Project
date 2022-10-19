import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
