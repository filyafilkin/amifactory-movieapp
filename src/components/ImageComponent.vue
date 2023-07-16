<template>
  <div class="img">
    <img :src="imageProps" :alt="titleProps" />
  </div>
</template>

<script>
export default {
  props: ['imageProps', 'titleProps']
}
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 785px;
    z-index: -1;
  }

  .img::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(22, 22, 22, 0) 47.99%, #161616 100%);
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 1200px) {
  .img {
    height: 382px;
  }
}

@media screen and (max-width: 835px) {
  .img {
    height: 785px;
  }
}

@media screen and (max-width: 767px) {
  .img {
    height: auto;
  }
}
</style>
