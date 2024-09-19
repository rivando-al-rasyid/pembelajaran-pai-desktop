import { createRouter, createWebHistory } from 'vue-router'
import DokumenPembelajaran from '../views/DokumenPembelajaran.vue'
import HomeView from '../views/HomeView.vue'
import MateriMenuView from '../views/MateriMenuView.vue'
import VideoMateri from '../views/VideoPembelajaran.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/materi',
      name: 'menumateri',
      component: MateriMenuView
    },
    {
      path: '/video-materi',
      name: 'menuvideo',
      component: VideoMateri
    },
    {
      path: '/kd',
      name: 'kd',
      component: DokumenPembelajaran
    }
  ]
})

export default router
