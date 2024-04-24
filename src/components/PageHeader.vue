<template>
  <header class="header">
    <nav class="nav" :class="{ 'bg-white': isScrolled }">
      <router-link to="/" class="logo">
        <img src="../assets/images/logo1.svg" alt="Logo" class="logo__image" />
        <span class="logo__title">Protoapp</span>
      </router-link>
      <transition name="slide">
        <ul class="nav__lists" id="sidebar" :class="{ 'is-active': isActive }">
          <li>
            <router-link class="nav__link active" to="/">Home</router-link>
          </li>
        </ul>
      </transition>

      <label for="" class="nav__menu">
        <button @click="toggleMenu" class="nav__menu--btn">
          <font-awesome-icon :icon="['fas', 'bars']" v-if="!isActive" />
          <font-awesome-icon :icon="['fas', 'xmark']" v-if="isActive" />
        </button>
      </label>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const isScrolled = ref(false);

    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      isScrolled.value = scrollPosition > 0;
    };

    const scroll = onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const destroyScroll = onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      isActive,
      isScrolled,
      toggleMenu,
      handleScroll,
      scroll,
      destroyScroll,
    };
  },
};
</script>

<style></style>
