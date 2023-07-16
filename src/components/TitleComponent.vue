<template>
  <div class="title" v-if="titleProps">
    {{ titleProps }}<span v-if="releaseYearProps">({{ releaseYearProps }})</span>
  </div>
</template>

<script>
export default {
  props: ['titleProps', 'releaseYearProps']
}
</script>

<style scoped>
.title {
  font-family: 'Krona One', sans-serif;
  font-size: 40px;
  margin-bottom: 20px;
}

.title span {
  font-size: 18px;
  margin-left: 8px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
}

@media screen and (max-width: 1200px) {
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 40px;
  }
}

@media screen and (max-width: 767px) {
  .title {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 24px;
    line-height: 35px;
  }

  .title span {
    margin-left: 0;
  }
}
</style>
