import { createApp } from 'vue'
import router from '@/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/global.css'
import 'vue3-perfect-scrollbar/style.css'
import App from '@/App.vue'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'

const app = createApp(App)
app.use(router)
app.use(PerfectScrollbarPlugin, { componentName: 'PerfectScrollbar' })
app.mount('#app')

function updateAppWrapperClass(toPath) {
  const appWrapper = document.getElementById('app')
  if (!appWrapper) return

  let classes = ['app-wrapper', 'd-flex']
  if (toPath === '/login' || toPath === '/register') {
    classes.push('flex-column')
  }

  appWrapper.className = classes.join(' ')
}

updateAppWrapperClass(window.location.pathname)
router.afterEach((to) => {
  updateAppWrapperClass(to.path)
})