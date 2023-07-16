<template>
  <div>
    <img :src="imageProps" :alt="titleProps" />
  </div>
</template>

<script>
export default {
  props: ['imageProps', 'titleProps']
}
</script>

<style scoped>
div {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -1;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  object-fit: cover;
}
</style>
