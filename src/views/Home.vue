<template>
<h1>Search Your Favorite Movies! </h1>
  <div class="home">
    <div class="feature-card">
<router-link to="/movie/tt0160862">
<div class="content-overlay"></div>
  <img src="https://m.media-amazon.com/images/M/MV5BY2Y0N2YyOTQtMGNiYy00ZDViLTgxYmItODkxNzlkMWVjNTFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="She's All That Poster">
 <div class="detail fadeIn-bottom">
     <h3>She's All That</h3>
     <p>A high school jock makes a bet that he can turn an unattractive girl into the school's prom queen.</p>
     </div>
     </router-link>
     </div>
    <div class="feature-card">
<router-link to="/movie/tt0337563">
<div class="content-overlay"></div>
<img src="https://m.media-amazon.com/images/M/MV5BMjE1NzI5NTkwMF5BMl5BanBnXkFtZTYwOTA4NzY2._V1_SX300.jpg" alt="13 Going on 30 Poster">
 <div class="detail fadeIn-bottom">
     <h3>13 Going On 30</h3>
     <p>A girl makes a wish on her thirteenth birthday, and wakes up the next day as a thirty-year-old woman</p>
     </div>
     </router-link>
     </div>
      <!-- <router-link to="/movie/tt0356470"><img src="https://m.media-amazon.com/images/M/MV5BMTA1NDI0OTkwNDNeQTJeQWpwZ15BbWU3MDQ3Nzc1MjE@._V1_SX300.jpg" alt="A Cinderella Story Poster"><div class="detail">
     <h3>A Cinderella Story</h3>
     <p>Routinely exploited by her wicked stepmother, the downtrodden Samantha Montgomery is excited about the prospect of meeting her Internet beau at the school's Halloween dance</p>
     </div>
     </router-link> -->
  <div class="feature-card">
    <div class="content-overlay"></div>
   <router-link to="/movie/tt1355630"><img src="https://m.media-amazon.com/images/M/MV5BMjI4NjkxODMyMF5BMl5BanBnXkFtZTgwODYwODQ5MTE@._V1_SX300.jpg" alt="If I Stay Poster">
   <div class="detail fadeIn-bottom">
     <h3>If I Stay</h3>
     <p>Life changes in an instant for young Mia Hall after a car accident puts her in a coma. During an out-of-body experience, she must decide whether to wake up and live a life far different than she had imagined. The choice is hers.</p>
     </div>
     </router-link>
     </div>
     <div class="feature-card">
       <div class="content-overlay"></div>
   <router-link to="/movie/tt0770703"><img src="https://m.media-amazon.com/images/M/MV5BMjIzNTc2MTgwNV5BMl5BanBnXkFtZTcwMzYzMzgxNQ@@._V1_SX300.jpg" alt="What's Your Number Poster">
   <div class="detail fadeIn-bottom">
     <h3>What's Your Number?</h3>
     <p>A woman looks back at the past nineteen men she's had relationships with in her life and wonders if one of them might be her one true love.</p>
     </div>
     </router-link>
    </div>
  <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="FIND YOUR FLICKS" v-model="search" />
      <input type="submit" value="Search" />
    </form>
 <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import env from '@/env.js'
export default {
  setup () {
    const search = ref('')
    const movies = ref([])
    const SearchMovies = () => {
      if (search.value !== '') {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            movies.value = data.Search
            search.value = ''
          })
      }
    }
    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>

<style lang="scss">
$font-color: #fff;
$input: #f0847e;
h1 {
  text-align: center;
  color: $font-color;
}
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  float: left;
  .feature-card {
    &:hover {
 opacity: 0.8;
    }
    position: relative;
    margin: 15px;
    .featured-img {
      display: inline-block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
      align-content: space-between;
    }
    .detail {
  //     position: relative;
  //     display: inline-block;
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     background-color: rgba(0, 0, 300, 0.1);
  //     // padding: 16px;
  //     // z-index: 1;
  //     h3 {
  //       color:$font-color;
  //       // margin-bottom: 16px;
  //        text-align: center;
  // margin-bottom: 10px;
  //     }
  //     p {
  //       color: $font-color;
  //       width: -moz-fit-content;
  // width: fit-content;
  // padding: 5px;
  // margin-bottom: 1em;
  //     }
  //       position: absolute;
  // bottom: 20px;
  // right: 20px;
  // color: white;
  // padding-left: 20px;
  // padding-right: 20px;
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
   background-color:#f0847e;
  // &:hover {
  //    top: 50%;
  // left: 50%;
  // opacity: 1;
  // }
  h3{
  color: $font-color;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}
p{
  color: $font-color;
  font-size: 0.8em;
}
.fadeIn-bottom{
  top: 80%;
}
    }
.detail:hover {
        top: 50%;
        left: 50%;
        opacity: 0.875;
        padding-right: 20px;
        font-weight: bolder;
}
  }
  .search-box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 100%;
        color: $font-color;
        background-color: $input;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        &::placeholder {
          color: #f3f3f3;
        }
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background: radial-gradient(circle, rgba(240,132,126,1) 28%, rgba(238,96,124,1) 73%);
        padding: 16px;
        border-radius: 8px;
        color: $font-color;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #3B8070;
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;
    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      .movie-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        .product-image {
          position: relative;
          display: block;
          // img {
          //   display: block;
          //   width: 100%;
          //   height: 275px;
          // }
          .type {
            position: absolute;
            padding: 8px 16px;
            //  background: linear-gradient(90deg, rgba(236,77,126,1) 7%, rgba(238,106,126,1) 28%, rgba(240,132,126,1) 90%);
            color: $font-color;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: $input;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: $font-color;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    }
  }
}

.home .movies-list .movie {
        max-width: 50%;
        flex: 1 1 20%;
        padding: 16px 8px;
}
.home .movies-list .movie .movie-link .product-image img {
        display: block;
        width: 100%;
        /* height: 275px; */
        -o-object-fit: cover;
        /* object-fit: cover; */
}
</style>
