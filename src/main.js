import { createApp } from 'vue'
import router from '@/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/css/global.css'  
import App from '@/App.vue'

const app = createApp(App)
app.use(router).mount('#app')

// Function to update #app classes based on route
function updateAppWrapperClass(toPath) {
  const appWrapper = document.getElementById('app')
  if (!appWrapper) return

  let classes = ['app-wrapper', 'd-flex']

  // Add flex-column for login/register pages
  if (toPath === '/login' || toPath === '/register') {
    classes.push('flex-column')
  }

  appWrapper.className = classes.join(' ')
}

// Initial set on page load
updateAppWrapperClass(window.location.pathname)

// Update on every route change
router.afterEach((to) => {
  updateAppWrapperClass(to.path)
})