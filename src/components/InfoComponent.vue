<template>
  <div class="info">
    <ul v-show="genresProps.length > 0">
      <li v-for="genre in genresProps" :key="genre.id" class="semi-bold">
        {{ genre.title }}
      </li>
    </ul>

    <span v-if="mpaProps">{{ mpaProps }}</span>

    <span v-if="durationProps">{{ timeConvert(durationProps) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    genresProps: {
      type: Object,
      required: true,
      default: {
        genre: ''
      }
    },
    mpaProps: {
      type: String,
      required: true,
      default: ''
    },
    durationProps: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    timeConvert(n) {
      let num = n
      let hours = num / 60
      let rhours = Math.floor(hours)
      let minutes = (hours - rhours) * 60
      let rminutes = Math.round(minutes)
      let time
      if (rminutes == 0) {
        time = `${rhours}h`
        return time
      } else {
        time = `${rhours}h ${rminutes}m`
        return time
      }
    }
  }
}
</script>

<style scoped>
.info {
  display: flex;
  margin-bottom: 20px;
}

ul {
  display: flex;
  gap: 5px;
  padding: 0 20px 0 0;
  border-right: 1px solid #fff;
}

ul li::after {
  content: ',';
}

ul li:last-child::after {
  content: '';
}

span {
  padding: 0 20px;
  font-weight: 500;
  border-right: 1px solid #fff;
}

span:last-child {
  border-right: none;
}

@media screen and (max-width: 1200px) {
  .info {
    margin-bottom: 24px;
  }


}
</style>
