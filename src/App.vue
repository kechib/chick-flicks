<template>
<div>
  <header>
    <router-link to="/">
      <h1><span>Chick</span>Flicks</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
  </div>
</template>

<style lang="scss">
$primary: #742762;
$background: #854172;
$headerbg: #9c6172;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  &::selection {
    background: transparentize($primary, 0.5);
  }
}
body {
  background: url(https://st2.depositphotos.com/3746381/6961/i/600/depositphotos_69613143-stock-photo-pink-color-geometric-design.jpg);
-webkit-background-size: cover;
-moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  // background-color: $headerbg;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #FFF;
    font-size: 28px;
    span {
      color: $primary;
    }
  }
}
</style>
