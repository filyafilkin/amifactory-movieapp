<script>
import RatingComponent from '../components/RatingComponent.vue'
import TitleComponent from '../components/TitleComponent.vue'
import DescComponent from '../components/DescComponent.vue'
import InfoComponent from '../components/InfoComponent.vue'
import PeopleComponent from '../components/PeopleComponent.vue'
import BtnComponent from '../components/BtnComponent.vue'
import BackgroundComponent from '../components/BackgroundComponent.vue'
import CardsComponent from '../components/CardsComponent.vue'
import ImageComponent from '../components/ImageComponent.vue'
import BackButtonComponent from '../components/BackButtonComponent.vue'

export default {
  data() {
    return {
      movie: {},
      id: this.$route.params.id,
      width: '',
      moviesTablet: {}
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
    CardsComponent,
    ImageComponent,
    BackButtonComponent
  },
  methods: {
    getContent() {
      fetch(`https://live.mocat.amifactory.network/api/v1/movies/${this.id}`)
        .then((response) => response.json())
        .then((data) => (this.movie = data))
        .catch((err) => {
          console.error(err)
        })
    },
    getWidth() {
      this.width = screen.width
    },
    getContentTablet() {
      fetch(`https://live.mocat.amifactory.network/api/v1/movies/`)
        .then((response) => response.json())
        .then((data) => (this.moviesTablet = data.results))
        .catch((err) => {
          console.error(err)
        })
    }
  },
  created() {
    this.getContent()
    this.getWidth()
    this.getContentTablet()
  }
}
</script>

<template>
  <main>
    <section class="single" v-if="width > '1200'">
      <div class="container">
        <div class="content">
          <div class="left">
            <RatingComponent :ratingProps="movie.imdb_rating" />

            <TitleComponent :titleProps="movie.title" :releaseYearProps="movie.release_year" />

            <DescComponent :descProps="movie.description" />

            <InfoComponent
              :genresProps="movie.genres"
              :mpaProps="movie.mpa_rating"
              :durationProps="movie.duration"
            />

            <BtnComponent v-show="movie.title" />
          </div>

          <div class="right">
            <PeopleComponent
              :directorsProps="movie.directors"
              :writersProps="movie.writers"
              :starsProps="movie.stars"
            />
          </div>
        </div>

        <CardsComponent />
      </div>

      <BackgroundComponent :imageProps="movie.bg_picture" />
    </section>

    <section class="single single--medium" v-if="width < '1201' && width > '834'">
      <div class="content content--medium">
        <div class="sidebar">
          <ul class="list list--tablet">
            <li v-for="movie in moviesTablet" :key="movie.id" class="card">
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

        <div class="movie">
          <ImageComponent :imageProps="movie.bg_picture" />

          <div class="container">
            <div class="content content--1">
              <TitleComponent :titleProps="movie.title" :releaseYearProps="movie.release_year" />
              <BtnComponent v-show="movie.title" />
            </div>

            <div class="content content--2">
              <DescComponent :descProps="movie.description" />
              <RatingComponent :ratingProps="movie.imdb_rating" />
            </div>

            <InfoComponent
              :genresProps="movie.genres"
              :mpaProps="movie.mpa_rating"
              :durationProps="movie.duration"
            />

            <PeopleComponent
              :directorsProps="movie.directors"
              :writersProps="movie.writers"
              :starsProps="movie.stars"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="single single--tablet" v-if="width < '834' && width > '767'">
      <ImageComponent :imageProps="movie.bg_picture" />

      <div class="container">
        <div class="content content--1">
          <TitleComponent :titleProps="movie.title" :releaseYearProps="movie.release_year" />
          <BtnComponent v-show="movie.title" />
        </div>

        <div class="content content--2">
          <DescComponent :descProps="movie.description" />
          <RatingComponent :ratingProps="movie.imdb_rating" />
        </div>

        <InfoComponent
          :genresProps="movie.genres"
          :mpaProps="movie.mpa_rating"
          :durationProps="movie.duration"
        />

        <PeopleComponent
          :directorsProps="movie.directors"
          :writersProps="movie.writers"
          :starsProps="movie.stars"
        />

        <BackButtonComponent />
      </div>
    </section>

    <section class="single single--mobile" v-if="width < '767'">
      <ImageComponent :imageProps="movie.bg_picture" />

      <div class="container">
        <TitleComponent :titleProps="movie.title" :releaseYearProps="movie.release_year" />

        <DescComponent :descProps="movie.description" />

        <InfoComponent
          :genresProps="movie.genres"
          :mpaProps="movie.mpa_rating"
          :durationProps="movie.duration"
        />

        <PeopleComponent
          :directorsProps="movie.directors"
          :writersProps="movie.writers"
          :starsProps="movie.stars"
        />

        <div class="content content--fix">
          <RatingComponent :ratingProps="movie.imdb_rating" />
          <BtnComponent v-show="movie.title" />
        </div>

        <BackButtonComponent />
      </div>
    </section>
  </main>
</template>

<style scoped>
.single {
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0) 0%,
    rgba(22, 22, 22, 0.89) 67.19%,
    #161616 100%
  );
}

.single--tablet .container {
  margin-bottom: 154px;
}

.content--1 {
  margin-bottom: 32px;
}

.content--2 {
  margin-bottom: 24px;
}

.content--fix {
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  bottom: 0;
  padding: 16px 24px 36px 24px;
}

.movie {
  display: flex;
  align-items: flex-end;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 60vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0) 0%,
    rgba(22, 22, 22, 0.89) 67.19%,
    #161616 100%
  );
}

.sidebar {
  width: 40vw;
  padding: 24px;
  background: #161616;
  overflow: scroll !important;
  z-index: 1;
}

.list--tablet {
  grid-template-columns: repeat(2, 1fr);
}
</style>
