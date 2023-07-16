<template>
  <a href="#" class="button">Watch trailer</a>
</template>

<script>
export default {}
</script>

<style scoped>
.button {
  display: block;
  width: fit-content;
  color: #fff;
  text-decoration: none;
  padding: 13px 28px;
  background: #da1617;
  font-weight: 700;
  margin-bottom: 43px;
  white-space: nowrap;
}

.button:visited {
  color: #fff;
}

.button::before {
  content: url(@/assets/btn-icon.svg);
  width: 14px;
  height: 14px;
  margin-right: 14px;
}

@media screen and (max-width: 1200px) {
  .button {
    margin-bottom: 0;
  }
}
</style>
