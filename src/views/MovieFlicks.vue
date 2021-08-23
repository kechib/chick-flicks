
<template>
  <div class="movie-detail">
    <h2>{{movie.Title}}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <h3>Type: {{movie.Type}}</h3>
    <h3>Genre: {{ movie.Genre }}</h3>
   <h3>Language: {{ movie.Language }}</h3>
   <h3>Directed By: {{ movie.Director }}</h3>
   <p>Plot: {{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'
export default {
  setup () {
    const movie = ref({})
    const route = useRoute()
    onBeforeMount(() => {
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(response => response.json())
        .then(data => {
          movie.value = data
        })
    })
    return {
      movie
    }
  }
}
</script>

<style lang="scss">
$font-color: #fff;
*{
  color: $font-color;
}
.movie-detail {
  padding: 16px;
  h2 {
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
  }
  .featured-img {
    display: flex;
    // max-width: 200px;
    // margin-bottom: 16px;
  }
  p {
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
  }
}
// img.featured-img {
//         /* display: flex; */
//         /* align-items: center; */
//         /* justify-content: center; */
//         padding-left: 400px;
// }
.movie-detail p {
        color: #FFF;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
}
h3 {
  text-transform: capitalize;
}
img.featured-img {
        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */
        display: block;
        margin-left: auto;
        margin-right: auto;
        }
// @media only screen and (max-width: 600px) and (min-width: 200px)  {
// //       img.featured-img {
// //         /* display: flex; */
// //         /* align-items: center; */
// //         /* justify-content: center; */
// //         /* padding-left: 400px; */
// //         max-height: 400px;
// // }

// }
</style>
