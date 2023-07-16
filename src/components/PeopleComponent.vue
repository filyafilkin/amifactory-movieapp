<template>
  <div class="people">
    <div v-if="directorsProps.length > 0">
      <ul>
        <li class="heading">Directors:</li>
        <li class="semi-bold" v-for="director in directorsProps" :key="director.id">
          {{ director.first_name }} {{ director.last_name }}
        </li>
      </ul>
    </div>

    <div v-if="writersProps.length > 0">
      <ul>
        <li class="heading">Writers:</li>
        <li class="semi-bold" v-for="writer in writersProps" :key="writer.id">
          {{ writer.first_name }} {{ writer.last_name }}
        </li>
      </ul>
    </div>

    <div v-if="starsProps.length > 0">
      <ul>
        <li class="heading">Stars:</li>
        <li class="semi-bold" v-for="star in starsProps" :key="star.id">
          {{ star.first_name }} {{ star.last_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    directorsProps: {
      type: Object,
      required: true,
      default: {
        director: ''
      }
    },
    writersProps: {
      type: Object,
      required: true,
      default: {
        writer: ''
      }
    },
    starsProps: {
      type: Object,
      required: true,
      default: {
        star: ''
      }
    }
  }
}
</script>

<style scoped>
.people {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
}

span {
  margin-right: 7px;
}

div {
  display: flex;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

ul li:not(:first-child):not(:last-child)::after {
  content: ',';
}

li {
  white-space: nowrap;
}

@media screen and (max-width: 1200px) {
  .people {
    max-width: 517px;
  }

  ul {
    gap: 8px;
  }
}

@media screen and (max-width: 767px) {
  .people {
    padding-bottom: 84px;
    max-width: 100%;
  }
}
</style>
