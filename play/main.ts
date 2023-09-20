import { createApp } from 'vue'
import App from './app.vue'
import QfDesign from '@qf/components'

const app = createApp(App)

app.use(QfDesign)

app.mount('#app')