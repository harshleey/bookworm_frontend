import { createRouter, createWebHistory } from 'vue-router'

const MainLayout = () => import('@/layouts/MainLayout.vue')
const Dashboard = () => import('@/pages/dashboard/index.vue')
const Catalog = () => import('@/pages/catalog/index.vue')
// const Books = () => import('@/pages/books/index.vue')
// const Users = () => import('@/pages/users/index.vue')
// const Branches = () => import('@/pages/branches/index.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'catalog',
          component: Catalog,
        },
        // {
        //   path: 'books',
        //   component: Books,
        // },
        // {
        //   path: 'users',
        //   component: Users,
        // },
        // {
        //   path: 'branches',
        //   component: Branches,
        // },
      ],
    },
  ],
})

export default router
