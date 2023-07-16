<template>
  <ul class="cards">
    <li
      v-for="movie in currentPageItems"
      :key="movie.id"
      v-show="this.$route.params.id != movie.id"
      class="card"
    >
      <a :href="'/movie/' + movie.id">
        <div class="card-img">
          <img :src="movie.poster" :alt="movie.title" />
        </div>

        <div class="card-info">
          <div class="rating">{{ movie.imdb_rating }}<span>/10</span></div>
          <span class="title">{{ movie.title }}</span>
        </div>
      </a>
    </li>

    <li class="more" @click="next()" v-if="currentPageItems.length > 6">
      <div class="more-content">
        <div class="more-plus">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
            <path
              d="M19.4287 11H13.4287V5C13.4287 4.73478 13.3234 4.48043 13.1358 4.29289C12.9483 4.10536 12.6939 4 12.4287 4C12.1635 4 11.9091 4.10536 11.7216 4.29289C11.5341 4.48043 11.4287 4.73478 11.4287 5V11H5.42871C5.16349 11 4.90914 11.1054 4.7216 11.2929C4.53407 11.4804 4.42871 11.7348 4.42871 12C4.42871 12.2652 4.53407 12.5196 4.7216 12.7071C4.90914 12.8946 5.16349 13 5.42871 13H11.4287V19C11.4287 19.2652 11.5341 19.5196 11.7216 19.7071C11.9091 19.8946 12.1635 20 12.4287 20C12.6939 20 12.9483 19.8946 13.1358 19.7071C13.3234 19.5196 13.4287 19.2652 13.4287 19V13H19.4287C19.6939 13 19.9483 12.8946 20.1358 12.7071C20.3234 12.5196 20.4287 12.2652 20.4287 12C20.4287 11.7348 20.3234 11.4804 20.1358 11.2929C19.9483 11.1054 19.6939 11 19.4287 11Z"
            />
          </svg>
        </div>
        <span class="more-text">View more</span>
      </div>
    </li>

    <div class="arrows">
      <div class="prev" @click="prev()" v-if="currentPageItems.length < 6">
        <img src="@/assets/prev-icon.svg" alt="Prev" />
      </div>

      <div class="next" @click="next()" v-if="currentPageItems.length > 6">
        <img src="@/assets/next-icon.svg" alt="Next" />
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      perpage: 7,
      pageNumber: 0,
      movies: []
    }
  },
  computed: {
    currentPageItems() {
      return this.movies.slice(
        this.pageNumber * this.perpage,
        this.pageNumber * this.perpage + 1 + this.perpage
      )
    }
  },
  methods: {
    next() {
      this.pageNumber++
    },
    prev() {
      this.pageNumber--
    },
    getContent() {
      fetch(`https://live.mocat.amifactory.network/api/v1/movies/`)
        .then((response) => response.json())
        .then((data) => (this.movies = data.results))
        .catch((err) => {
          console.error(err)
        })
    }
  },
  created() {
    this.getContent()
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  gap: 16px;
  width: 100%;
  height: 290px;
}

.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 130px;
  transition: 0.3s all ease-in-out;
}

.card-info {
  display: flex;
  flex-direction: column;
  height: 50px;
}

.card-img {
  width: 100%;
  height: 195px;
  transition: 0.3s all ease-in-out;
  margin-bottom: 8px;
}

.card-img img {
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.card:hover .card-img {
  height: 230px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}

.rating {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  padding-left: 25px;
}

.rating span {
  font-size: 12px;
}

.rating::before {
  content: url(@/assets/star-icon.svg);
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
}

.more {
  max-width: 130px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.more-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 45%;
  left: 20%;
}

.more-text {
  font-size: 14px;
  transition: 0.3s all ease-in-out;
}

.more-plus svg {
  width: 24px;
  height: 24px;
  transition: 0.3s all ease-in-out;
  fill: #fff;
}

.more-content:hover > .more-text {
  color: #e98d4b;
}

.more-content:hover > .more-plus svg {
  fill: #e98d4b;
}

.prev {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(47px);
  cursor: pointer;
}

.next {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(47px);
  cursor: pointer;
}

.active {
}
</style>
