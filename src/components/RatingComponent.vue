<template>
  <div class="rating" v-if="ratingProps">
    <span class="heading semi-bold">IBDb rating</span>
    <div class="numbers">{{ ratingProps }}<span>/10</span></div>
  </div>
</template>

<script>
export default {
  props: ['ratingProps']
}
</script>

<style scoped>
.rating {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 17px;
}

.numbers {
  display: flex;
  flex-wrap: nowrap;
  font-size: 28px;
  font-weight: 500;
}

.numbers span {
  font-size: 16px;
  font-weight: 400;
}

.numbers::before {
  display: block;
  content: url(@/assets/star-icon.svg);
  width: 20px;
  height: 20px;
  margin-right: 6.5px;
}

@media screen and (max-width: 1200px) {
  .rating {
    margin-bottom: 0;
  }

  .numbers {
    justify-content: flex-end;
  }

  .numbers span {
    line-height: 28px;
  }

  .numbers::before {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 767px) {
  .numbers {
    justify-content: flex-start;
  }
}
</style>
