<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hoveredIndex = ref<number | null>(null)
const sidebarRef = ref<HTMLElement | null>(null)

const menuItems = [
  { path: '/dashboard', icon: 'ri-dashboard-fill', title: 'Dashboard' },
  { path: '/catalog', icon: 'ri-folder-4-line', title: 'Catalog' },
  { path: '/books', icon: 'ri-book-open-fill', title: 'Books' },
  { path: '/users', icon: 'ri-group-3-line', title: 'Users' },
  { path: '/branches', icon: 'ri-community-line', title: 'Branches' },
]

const footerItems = [{ path: '/logout', icon: 'ri-logout-box-fill', title: 'Logout' }]

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
}

const handleMouseLeave = () => {
  hoveredIndex.value = null
}

const isActive = (path: string) => {
  return route.path === path
}

const shouldHighlight = (index: number, path: string) => {
  if (hoveredIndex.value !== null) {
    return hoveredIndex.value === index
  }
  return isActive(path)
}
</script>

<template>
  <div class="sidebar" ref="sidebarRef" @mouseleave="handleMouseLeave">
    <div class="logo">
      <img src="/src/assets/images/small_white_logo.svg" class="small__white__logo" alt="logo" />
      <img src="/src/assets/images/bookwarm_word_logo.svg" alt="logo text" />
      <img
        src="/src/assets/images/bookworm_library_logo.svg"
        alt="logo text"
        class="library__logo"
      />
    </div>

    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="item.path"
        :class="{ highlighted: shouldHighlight(index, item.path) }"
        @mouseenter="handleMouseEnter(index)"
      >
        <router-link :to="item.path">
          <span class="icon"><i :class="item.icon"></i></span>
          <span class="title">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>

    <footer>
      <ul>
        <li
          v-for="(item, index) in footerItems"
          :key="item.path"
          :class="{ highlighted: shouldHighlight(menuItems.length + index, item.path) }"
          @mouseenter="handleMouseEnter(menuItems.length + index)"
        >
          <router-link :to="item.path">
            <span class="icon"><i :class="item.icon"></i></span>
            <span class="title">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100vh;
  background-color: #000000;
  transition: 0.5s;
  overflow-y: auto;
  z-index: 1000;
}

.logo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 1rem;
}

.logo img {
  max-width: 70%;
  height: auto;
}

.library__logo {
  width: 30%;
}

.sidebar ul {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
}

.sidebar ul li,
footer ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition: background-color 0.3s ease;
}

.sidebar ul li.highlighted,
footer ul li.highlighted {
  background-color: #fff;
}

.sidebar ul li a,
footer ul li a {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  text-decoration: none;
  color: #fff;
  height: 60px;
  transition: color 0.3s ease;
}

.sidebar ul li.highlighted a,
footer ul li.highlighted a {
  color: #000;
}

.sidebar ul li a .icon,
footer ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  text-align: center;
}

.sidebar ul li a .icon i,
footer ul li a .icon i {
  font-size: 1.75rem;
}

.sidebar ul li a .title,
footer ul li a .title {
  padding: 0 10px;
  text-align: start;
  white-space: nowrap;
  font-size: 1.2rem;
}

footer {
  padding-bottom: 20px;
}
</style>
