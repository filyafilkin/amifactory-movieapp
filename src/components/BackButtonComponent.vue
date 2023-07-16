<template>
  <div class="back" @click="this.$router.go(-1)">
    <img src="@/assets/back-icon.svg" alt="Back" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.back {
  position: absolute;
  top: 42px;
  left: 24px;
  z-index: 2;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .back {
    top: 55px;
    left: 16px;
  }
}
</style>
