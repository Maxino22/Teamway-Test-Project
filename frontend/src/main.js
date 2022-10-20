import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
