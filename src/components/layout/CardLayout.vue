<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: String,
  },
};
</script>

<style></style>
