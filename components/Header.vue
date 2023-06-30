<script setup lang="ts"></script>

<template>
  <div class="header-sec">
    <div class="container">
      <div class="header">
        <div class="header__title">
          <NuxtLink to="/">СКС</NuxtLink>
        </div>

        <ul class="header__menu">
          <li><NuxtLink to="/">Главная</NuxtLink></li>
          <!-- <li><NuxtLink to="/about">О нас</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/contacts">Контакты</NuxtLink></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.header-sec {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  font-size: 24px;
}

.header__menu {
  display: flex;
  align-items: center;
  column-gap: 30px;
}

.header__menu a.active {
  color: #009cff;
}
</style>
