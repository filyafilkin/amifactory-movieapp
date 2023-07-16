<script>
import RatingComponent from '../components/RatingComponent.vue'
import TitleComponent from '../components/TitleComponent.vue'
import DescComponent from '../components/DescComponent.vue'
import InfoComponent from '../components/InfoComponent.vue'
import PeopleComponent from '../components/PeopleComponent.vue'
import BtnComponent from '../components/BtnComponent.vue'
import BackgroundComponent from '../components/BackgroundComponent.vue'
import CardsComponent from '../components/CardsComponent.vue'

export default {
  data() {
    return {
      perpage: 6,
      pageNumber: 0,
      movies: [],
      width: ''
    }
  },
  components: {
    RatingComponent,
    TitleComponent,
    DescComponent,
    InfoComponent,
    PeopleComponent,
    BtnComponent,
    BackgroundComponent,
    CardsComponent
  },
  methods: {
    getContent() {
      fetch(`https://live.mocat.amifactory.network/api/v1/movies/`)
        .then((response) => response.json())
        .then((data) => (this.movies = data.results))

        .catch((err) => {
          console.error(err)
        })
    },
    getWidth() {
      this.width = screen.width
    }
  },
  created() {
    this.getContent()
    this.getWidth()
    if (this.width > '1200') {
      this.$router.push('/movie/1')
    }
  }
}
</script>

<template>
  <main>
    <section class="movies">
      <div class="container">
        <h1 v-show="width < '835'" class="title--tablet">Popular <span>serials</span></h1>

        <div class="content">
          <ul class="list">
            <li v-for="movie in movies" :key="movie.id" class="card">
              <a :href="'/movie/' + movie.id">
                <div class="card-img">
                  <img :src="movie.poster" :alt="movie.title" />
                </div>

                <div class="card-rating">{{ movie.imdb_rating }}<span>/10</span></div>
                <span class="card-title">{{ movie.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.title--tablet {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
}

.title--tablet span {
  color: #da1617;
  font-weight: 700;
}

.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 24px 12px;
}

.card {
  height: max-content;
}

.card-img {
  width: 100%;
  margin-bottom: 14px;
}

.card-img img {
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.card-title {
  font-size: 18px;
  font-weight: 500px;
  color: #fff;
}

.card-rating {
  position: relative;
  font-size: 16px;
  color: #fff;
  padding-left: 25px;
}

.card-rating span {
  font-size: 14px;
}

.card-rating::before {
  content: url(@/assets/star-icon.svg);
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
}

@media screen and (max-width: 767px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
