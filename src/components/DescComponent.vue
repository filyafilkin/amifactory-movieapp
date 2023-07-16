<template>
  <p class="desc" v-if="descProps">
    {{ descProps }}
  </p>
</template>

<script>
export default {
  props: ['descProps']
}
</script>

<style>
.desc {
  font-size: 16px;
  margin-bottom: 20px;
  max-width: 560px;
}

@media screen and (max-width: 1200px) {
  .desc {
    max-width: 75%;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .desc {
    max-width: 100%;
    margin-bottom: 24px;
  }
}
</style>
