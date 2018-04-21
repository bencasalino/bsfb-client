<template>
  <div id="app">
    <Header/>
        <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Nanum+Gothic:700');
#app {
    background-color:#f7f8f3;
  color: #222;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 400;
}

</style>
